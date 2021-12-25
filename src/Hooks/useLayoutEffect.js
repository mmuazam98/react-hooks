import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);
  // ! useLayoutEffect is called before useEffect, it gets called before the output screen is rendered/printed
  useEffect(() => {
    // console.log("Inside useEffect");
    inputRef.current.value = "REACT";
  }, []);
  useLayoutEffect(() => {
    // console.log("Inside useLayoutEffect");
    console.log(inputRef.current.value);
    // although we are updating the value of inputRef in useEffect, for a very short time it is going to be equal to "react" and after rendering it updates to "REACT";
    // but we'll see "react" in the console because useLayoutEffect gets called before useEffect updates our DOM
  }, []);
  return (
    <div className="hook">
      <h1>useLayoutEffect Hook</h1>
      <input type="text" value="react" ref={inputRef} />
    </div>
  );
};

export default LayoutEffectTutorial;
