import * as React from "react";

interface FormulaProps {
  displayFormula: string;
}

const Formula = (props: FormulaProps) => {
  return (
    <div>
      <input value={props.displayFormula} readOnly></input>
    </div>
  );
};

export default Formula;
