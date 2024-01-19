import React, { useState, useContext } from "react";
import "./App.css";
import io from "socket.io-client";
import NameSelection from "./components/NameSelection";
import CharacterSelection from "./components/CharacterSelection/CharacterSelection";

export const Context = React.createContext();

function App() {
  //STATES
  const [playerName, setPlayerName] = useState("");

  //SET PLAYER NAME FROM LOCALSTORAGE IF USER HAD SAVED IT BEFORE
  if (localStorage.getItem("username") && !playerName) 
    setPlayerName(localStorage.getItem("username"));
  

  return (
    <Context.Provider value={[setPlayerName]}>
      {!playerName && <NameSelection />}

      {<CharacterSelection />}
    </Context.Provider>
  );
}

export default App;
