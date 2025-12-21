import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      <div>
        <button onClick={() => setSelectedOption("Option 1")}>
          Select Option 1
        </button>
      </div>
      <div>
        <button onClick={() => setSelectedOption("Option 2")}>
          Select Option 2
        </button>
      </div>
    </div>
  );
};

export default App;
