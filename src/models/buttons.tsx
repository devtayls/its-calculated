import { ButtonProps } from "../components/button";
import * as consts from "../models/consts";

type NumButtons = ButtonProps[];

export const numButtons: NumButtons = [
  {
    id: "one",
    display: "1",
    value: 1,
    type: consts.NUMBER
  },
  {
    id: "two",
    display: "2",
    value: 2,
    type: consts.NUMBER
  },
  {
    id: "three",
    display: "3",
    value: 3,
    type: consts.NUMBER
  },
  {
    id: "four",
    display: "4",
    value: 4,
    type: consts.NUMBER
  },
  {
    id: "five",
    display: "5",
    value: 5,
    type: consts.NUMBER
  },
  {
    id: "six",
    display: "6",
    value: 6,
    type: consts.NUMBER
  },
  {
    id: "seven",
    display: "7",
    value: 7,
    type: consts.NUMBER
  },
  {
    id: "eight",
    display: "8",
    value: 8,
    type: consts.NUMBER
  },
  {
    id: "nine",
    display: "9",
    value: 9,
    type: consts.NUMBER
  },
  {
    id: "zero",
    display: "0",
    value: 0,
    type: consts.NUMBER
  }
];

type OperandButtons = ButtonProps[];
export const operandButtons: OperandButtons = [
  {
    id: consts.MULTIPLY,
    display: "*",
    value: consts.MULTIPLY,
    type: consts.OPERAND
  },
  {
    id: consts.DIVIDE,
    display: "/",
    value: consts.DIVIDE,
    type: consts.OPERAND
  },
  {
    id: consts.SUBTRACT,
    display: "-",
    value: consts.SUBTRACT,
    type: consts.OPERAND
  },
  {
    id: consts.ADD,
    display: "+",
    value: consts.ADD,
    type: consts.OPERAND
  }
];

type PuntuationButtons = ButtonProps[];
export const puntuationButtons: PuntuationButtons = [
  {
    id: consts.NUMLOCK,
    display: "NUM",
    value: consts.NUMLOCK,
    type: consts.NUMLOCK
  },
  {
    id: consts.DECIMAL,
    display: ".",
    value: consts.DECIMAL,
    type: consts.DECIMAL
  },
  {
    id: consts.EQUAL,
    display: "=",
    value: consts.EQUAL,
    type: consts.EQUAL
  },
  {
    id: consts.CLEAR,
    display: "CLR",
    value: consts.CLEAR,
    type: consts.CLEAR
  }
];
