import * as React from "react";
import Button from "./button";
import { ButtonProps } from "./button";
import * as consts from "../models/consts";
import {
  numButtons,
  operandButtons,
  puntuationButtons
} from "../models/buttons";

interface FacePlateProps {
  onNumClick: (event: React.FormEvent<HTMLInputElement>) => void;
  onOperandClick: (event: React.FormEvent<HTMLInputElement>) => void;
  onDeciClick: () => void;
  onEqualClick: () => void;
  onClearClick: () => void;
  onNumLockClick: () => void;
}

class FacePlate extends React.Component<FacePlateProps, any> {
  constructor(props: FacePlateProps) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.getMethod = this.getMethod.bind(this);
  }

  getMethod(type: string) {
    let method;
    switch (type) {
      case consts.NUMBER:
        method = this.props.onNumClick;
        break;
      case consts.OPERAND:
        method = this.props.onOperandClick;
        break;
      case consts.DECIMAL:
        method = this.props.onDeciClick;
        break;
      case consts.EQUAL:
        method = this.props.onEqualClick;
        break;
      case consts.CLEAR:
        method = this.props.onClearClick;
        break;
      case consts.NUMLOCK:
        method = this.props.onNumLockClick;
        break;
    }
    return method;
  }

  renderButton(buttonProps: ButtonProps) {
    let method: any = this.getMethod(buttonProps.type);

    return (
      <Button
        id={buttonProps.id}
        display={buttonProps.display}
        value={buttonProps.value}
        onClick={method}
        type={buttonProps.type}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="button-row">
          {this.renderButton(puntuationButtons[0])}
          {this.renderButton(operandButtons[1])}
          {this.renderButton(operandButtons[0])}
          {this.renderButton(puntuationButtons[3])}
        </div>
        <div className="button-row">
          {this.renderButton(numButtons[6])}
          {this.renderButton(numButtons[7])}
          {this.renderButton(numButtons[8])}
          {this.renderButton(operandButtons[2])}
        </div>
        <div className="button-row">
          {this.renderButton(numButtons[3])}
          {this.renderButton(numButtons[4])}
          {this.renderButton(numButtons[5])}
          {this.renderButton(operandButtons[3])}
        </div>
        <div className="button-row">
          {this.renderButton(numButtons[0])}
          {this.renderButton(numButtons[1])}
          {this.renderButton(numButtons[2])}
          {this.renderButton(puntuationButtons[2])}
        </div>
        <div className="button-row">
          {this.renderButton(numButtons[9])}
          {this.renderButton(puntuationButtons[1])}
        </div>
      </div>
    );
  }
}

export default FacePlate;
