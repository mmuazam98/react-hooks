import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="hook">
        <h1>useContext Hook</h1>
        <Login /> <User />
      </div>
    </AppContext.Provider>
  );
};

export default ContextTutorial;
