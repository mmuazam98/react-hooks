import { useCallback, useEffect, useState } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("React")}</div>;
};

const CallBackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("I love💕");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  // i.e it will only be called/recreated when the state "data" changes

  //   const returnComment = (name) => {
  //     return data + name;
  //   };
  // ! this will get called everytime any state gets changed
  return (
    <div className="hook">
      <h1>useCallback Hook</h1>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default CallBackTutorial;
