import React, { useState, useContext, useEffect } from "react";
import { Context } from "../App";
import io from "socket.io-client";

const JoinRoom = () => {
  const [roomCodeFromInput, setRoomCodeFromInput] = useState("");
  const [playerName, setPlayerName, roomCode, setRoomCode] = useContext(Context);


  useEffect(() => {
     const socket = io("http://localhost:3000");
      socket.emit("joinRoom", roomCode, playerName, cb => {
        console.log(cb);
      });
       return () => {
         socket.disconnect();
       };
  }, [roomCode]);


  const handleJoin = () => {
    setRoomCode(roomCodeFromInput);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Room ID"
        onChange={(e) => setRoomCodeFromInput(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default JoinRoom;
