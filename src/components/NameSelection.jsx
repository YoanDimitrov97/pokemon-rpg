import React, { useContext, useRef } from "react";
import CSS from "./NameSelection.module.css";
import { Context } from "../App";

const NameSelection = () => {
  const [setPlayerName] = useContext(Context);
  const username = useRef();

  const handleSaveName = () => {
    if (username.current.value !== "") {
      localStorage.setItem("username", username.current.value);
      setPlayerName(username.current.value);
    }
  };

  return (
    <div className={CSS.holder}>
      <input
        type="text"
        placeholder="Choose Your Name..."
        className={CSS.name}
        ref={username}
      />
      <button onClick={handleSaveName} className={CSS.btn}>
        SUBMIT
      </button>
    </div>
  );
};

export default NameSelection;