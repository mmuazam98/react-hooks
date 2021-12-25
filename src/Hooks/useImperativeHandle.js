import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

// forwardRef allows to pass refs to a component
// use it to call functions inside the child component <Button />
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle From Child</button>
      <br />
      {toggle && <span>Toggle</span>}
    </>
  );
});

const ImperativeTutorial = () => {
  const buttonRef = useRef(null);
  return (
    <div className="hook">
      <h1>useImerpative Hook</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Toggle From Parent
      </button>
      <br />
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeTutorial;
