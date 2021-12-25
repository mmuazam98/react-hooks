import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  // mainly used for manipulating the DOM
  // doesnt cause a rerender on value change
  return (
    <div className="hook">
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} placeholder="Name..." />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <br />
      <br />
      <input type="text" ref={inputRef2} placeholder="Name..." />
      <button
        onClick={() => {
          inputRef2.current.value = "";
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default RefTutorial;
