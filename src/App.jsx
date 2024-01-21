import React, { useState, useContext } from "react";
import "./App.css";
import NameSelection from "./components/NameSelection";
import CharacterSelection from "./components/CharacterSelection/CharacterSelection";

export const Context = React.createContext();

function App() {
  //STATES
  const [playerName, setPlayerName] = useState("");
  const [characters, setCharacters] = useState([]);

  //SET PLAYER NAME FROM LOCALSTORAGE IF USER HAD SAVED IT BEFORE
  if (localStorage.getItem("username") && !playerName)
    setPlayerName(localStorage.getItem("username"));

  const contextValue = {
    player: [setPlayerName ],
    characters: [ characters, setCharacters ],
  };
  
  return (
    <Context.Provider value={contextValue}>
      {!playerName && <NameSelection />}

      {<CharacterSelection />}
    </Context.Provider>
  );
}

export default App;
