import React, { useState } from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
