import * as consts from "./consts";

/**
 * Turns the operation arr into a string we can displasy
 * @param arr
 */
export function arrToStr(arr: (number | string)[]): string {
  let str = "";

  arr.forEach((currentVal) => {
    let val = currentVal.toString()
    str = str.concat(val);
  });
  return str;
}

/**
 * Turns the operator word 'multiply' to the operator char '*'
 * @param operator 
 * @returns 
 */
export function operatorToChar(operator : string): string {
  let char = '';
  switch (operator) {
    case consts.MULTIPLY:
      char = consts.MULTIPLY_CHAR;
      break;
    case consts.DIVIDE:
      char = consts.DIVIDE_CHAR;
      break;
    case consts.ADD:
      char = consts.ADD_CHAR;
      break;
    case consts.SUBTRACT:
      char = consts.SUBTRACT_CHAR;
      break;
  }
  return char;
}

/**
 * Tells us whether the given element is an operand char
 * @param item
 */
export function isOperandChar(item: string | number) {
  let flag = false;
  if (typeof item !== "string") {
    return flag;
  }
  switch (item) {
    case consts.MULTIPLY_CHAR:
      flag = true;
      break;
    case consts.DIVIDE_CHAR:
      flag = true;
      break;
    case consts.ADD_CHAR:
      flag = true;
      break;
    case consts.SUBTRACT_CHAR:
      flag = true;
      break;
  }
  return flag;
}
