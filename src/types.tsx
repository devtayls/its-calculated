import * as consts from "./models/consts";

export type OperandCharacter =
  | typeof consts.DECIMAL_CHAR
  | typeof consts.MULTIPLY_CHAR
  | typeof consts.DIVIDE_CHAR
  | typeof consts.SUBTRACT_CHAR
  | typeof consts.ADD_CHAR;

export type Operand = 
| typeof consts.DECIMAL
| typeof consts.MULTIPLY
| typeof consts.DIVIDE
| typeof consts.SUBTRACT
| typeof consts.ADD
| typeof consts.NUMLOCK
| typeof consts.EQUAL
| typeof consts.CLEAR;
