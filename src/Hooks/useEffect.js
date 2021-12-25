import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
    //   setData(response.data[count].email);
    // });
    (async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setData(response.data[count].email);
    })();
  }, [count]);
  // if no array is passed it will assume that it has to run after every state change
  // if empty array is passed, it will run once after the component has been rendered;
  // if any state is passed in the array, it will run everytime that particular state changes
  return (
    <div className="hook">
      <h1>useEffect Hook</h1>

      <h5>{data}</h5>
      <h5>{count}</h5>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default EffectTutorial;
