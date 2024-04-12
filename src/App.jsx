import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";
import NameSelection from "./components/NameSelection";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import CharacterSelection from "./components/CharacterSelection/CharacterSelection";

export const Context = React.createContext();

function App() {
  //STATES
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [roomCode, setRoomCode] = useState("1111");
  const [clickJoinRoom, setClickJoinRoom] = useState(false);
  const [clickCreateRoom, setClickCreateRoom] = useState(false);

  //SET PLAYER NAME FROM LOCALSTORAGE IF USER HAD SAVED IT BEFORE
  if (localStorage.getItem("username") && !playerName)
    setPlayerName(localStorage.getItem("username"));

  const handleCreateARoom = () => {
    setClickCreateRoom(true);
  };
  const handleJoinARoom = () => {
    setClickJoinRoom(true);
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("playerJoined", (data) => {
      console.log(data);
      setPlayers(data.players)
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Context.Provider
      value={[playerName, setPlayerName, roomCode, setRoomCode]}
    >
      {!playerName && <NameSelection />}
      {!clickJoinRoom && !clickCreateRoom && (
        <>
          <button onClick={handleCreateARoom}>CREATE A ROOM</button>
          <button onClick={handleJoinARoom}>JOIN A ROOM</button>
          {<CharacterSelection />}
        </>
      )}

      {clickCreateRoom && <CreateRoom />}
      {clickJoinRoom && <JoinRoom />}

      {players.map((value, index, array) => {return (<div>{value}</div>) })}
    </Context.Provider>
  );
}

export default App;
