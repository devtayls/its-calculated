import * as React from "react";
import FacePlate from "./components/faceplate";
import Display from "./components/display";
import Formula from "./components/formula";
import * as consts from "./models/consts";
import { OperandCharacter } from "./types";
import { arrToStr, operatorToChar, isOperandChar } from "./models/helpers";

interface AppState {
  output: string;
  outputArr: (string | number)[];
  numLock: true | false;
  holdNum: true | false;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      output: "0",
      outputArr: [0],
      numLock: false,
      holdNum: false
    };

    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleOperandClick = this.handleOperandClick.bind(this);
    this.handleDecimalClick = this.handleDecimalClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.addToOutputArr = this.addToOutputArr.bind(this);
    this.handleNumLockClick = this.handleNumLockClick.bind(this);
  }

  //Use this to add to this.state.outputArr
  addToOutputArr(newChar: string | number | OperandCharacter) {
    let oldArr = this.state.outputArr;
    let newArr = oldArr.concat([newChar]);

    let numLock = this.state.numLock;
    if (numLock) {
      return false;
    } //If numlock do nothing.

    this.setState({
      outputArr: newArr
    });
  }

  //Use this to remove from this.state.outputArr
  removeIndexFromOutputArr(index: number) {
    let arr = this.state.outputArr;
    arr.splice(index, 1);

    this.setState({
      outputArr: arr
    });
  }

  handleNumLockClick() {
    let currState = this.state.numLock;

    this.setState({
      numLock: !currState
    });
  }

  //TODO: num is actually a string here. Changing it breaks the 'no leading zeros' check below
  //TODO: 0+5 breaks here
  handleNumClick(event: React.FormEvent<HTMLInputElement>) {
    let num: number | string = event.currentTarget.value;
    let outputArr = this.state.outputArr;
    let holdNum = this.state.holdNum;

    //TODO: There is a type issue defect here.
    // if ((outputArr[0] === 0 || outputArr[0] === "0") && num !== 0) {
    if ((outputArr[0] === 0 || outputArr[0] === "0") && num !== '0') {
      //NB: this is the index, not the value
      this.removeIndexFromOutputArr(0);
    }
    if (!holdNum) {
      this.addToOutputArr(num);
    }
  }

  handleOperandClick(event: React.FormEvent<HTMLInputElement>) {
    let operatorChar: string = operatorToChar(event.currentTarget.value);
    let outputArr = this.state.outputArr;
    let holdNum = this.state.holdNum;

    //If we have a duplicate set of operators, remove the previous one.
    if (isOperandChar(outputArr[outputArr.length - 1])) {
      let lastIndex = outputArr.length - 1;
      let secondToLastChar = outputArr[outputArr.length - 2];
      //Subtract has special rules
      if (operatorChar === consts.SUBTRACT_CHAR) {
        if (secondToLastChar === consts.SUBTRACT_CHAR) {
          this.removeIndexFromOutputArr(lastIndex);
        } //Allow one duplicate SUBTRACT_CHAR to account for 5 * -5
      } else {
        //Iterate over the outputArr and remove operators till the last good index
        //This solves 5 * - + 5 = 10
        for (let i = outputArr.length - 1; i > 0; i--) {
          let ele = outputArr[i];
          if (isOperandChar(ele)) {
            this.removeIndexFromOutputArr(i);
          } else {
            break;
          }
        }
      } //If not SUBTRACTOR_CHAR than remove last operand and replace
    }
    if (holdNum) {
      this.setState({
        holdNum: false
      });
    }
    this.addToOutputArr(operatorChar);
  }

  handleDecimalClick() {
    let outputArr = this.state.outputArr;
    let holdNum = this.state.holdNum;

    let rev = outputArr.reverse();
    let flag = true;
    for (let i = 0; i <= rev.length; i++) {
      let ele = rev[i];
      //If we have an operand, it's safe to add.
      if (isOperandChar(ele)) {
        break;
      } else if (ele === consts.DECIMAL_CHAR) {
        flag = false;
        break;
      }
    }
    outputArr.reverse();
    if (flag) {
      this.addToOutputArr(consts.DECIMAL_CHAR);
      if (holdNum) {
        this.setState({
          holdNum: false
        });
      }
    }
  }

  handleEqualClick() {
    let equation = arrToStr(this.state.outputArr);
    if (typeof equation !== "string") {
      return false;
    }
    let answer = Math.round(1000000000000 * eval(equation)) / 1000000000000;
    let solution = [answer];

    this.setState({
      outputArr: solution,
      holdNum: true
    });
  }

  handleClearClick() {
    console.log("here");
    this.setState({
      output: "0",
      outputArr: [0],
      holdNum: false
    });
  }

  render() {
    let outputArr = this.state.outputArr;
    let formula = arrToStr(outputArr);
    let output = arrToStr(outputArr);
    return (
      <div>
        <Formula displayFormula={formula} />
        <Display output={output} />
        <FacePlate
          onNumClick={this.handleNumClick}
          onOperandClick={this.handleOperandClick}
          onDeciClick={this.handleDecimalClick}
          onEqualClick={this.handleEqualClick}
          onClearClick={this.handleClearClick}
          onNumLockClick={this.handleNumLockClick}
        />
      </div>
    );
  }
}

export default App;
