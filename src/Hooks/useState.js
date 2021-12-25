import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  return (
    <div className="hook">
      <h1>useState Hook</h1>
      {counter} <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateTutorial;
