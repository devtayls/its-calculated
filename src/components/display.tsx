import * as React from "react";

interface DisplayProps {
  output: string | number;
}

const Display = (props: DisplayProps) => {
  return (
    <div>
      <input id="display" value={props.output} readOnly></input>
    </div>
  );
};

export default Display;
