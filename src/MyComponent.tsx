import React, { useState } from "react";

const MyComponent: React.FC<{ prop1: any; prop2: any }> = ({
  prop1,
  prop2,
}) => {
  const [state, setState] = useState(0);
  return (
    <div>
      state : {state}
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
      <button
        onClick={() => {
          console.log("click");
          setState((prevState) => prevState + 1);
        }}
      >
        {" "}
        Click me
      </button>
    </div>
  );
};

export default MyComponent;
