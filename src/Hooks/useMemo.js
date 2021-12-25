import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setData(response.data);
    })();
  }, []);
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };
  const getLongestName = useMemo(() => findLongestName(data), [data]);
  /* 
    ! findLongestName gets called everytime the toggle state changes;
    and everytime it will change findLongestName will be recreated and the computations inside it will be done again,
    sowe can use useMemo hook to prevent this, pass in the array as second argument so it will only be recreated when the state in
    the dependency array will change;
    const getLongestName = useMemo(() => findLongestName(data), [toggle]); -> everytime toggle state changes
    const getLongestName = useMemo(() => findLongestName(data), [data]); -> everytime data changes
  */
  return (
    <div className="hook">
      <h1>useMemo Hook</h1>
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <p> toggle </p>}
    </div>
  );
};

export default MemoTutorial;
