import * as React from "react";
import "../models/consts";
import * as consts from "../models/consts";
import { OperandCharacter, Operand } from "../types";

export interface ButtonProps {
  display: string;
  value?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | OperandCharacter | Operand;
  type:
    | typeof consts.NUMBER
    | typeof consts.OPERAND
    | typeof consts.DECIMAL
    | typeof consts.EQUAL
    | typeof consts.CLEAR
    | typeof consts.NUMLOCK;
  id: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      className={"button"}
      onClick={props.onClick}
      id={props.id}
      value={props.value}
    >
      {props.display}
    </button>
  );
}

export default Button;
