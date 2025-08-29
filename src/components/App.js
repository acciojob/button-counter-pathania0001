import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  // Step 1: Initialize counter state
  const [count, setCount] = useState(0);

  // Step 2: Handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      
      <p>Button clicked {count} times</p>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
