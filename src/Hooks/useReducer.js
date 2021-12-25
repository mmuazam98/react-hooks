import React, { useReducer } from "react";

const ReducerTutorial = () => {
  //! If we have to change multiple states, or state logic is complex -> use this hook
  const initialState = {
    counter: 0,
    showText: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          counter: state.counter + 1,
          showText: !state.showText,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="hook">
      <h1>useReducer Hook</h1>
      {state.counter} <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br />
      {state.showText && "Alternating Text "}
    </div>
  );
};

export default ReducerTutorial;
