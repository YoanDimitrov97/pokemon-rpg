import React, { useState, useContext, useEffect } from "react";
import { Context } from "../App";
import io from "socket.io-client";

const CreateRoom = () => {
  const [playerName, setPlayerName, roomCode, setRoomCode] = useContext(Context);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.emit("createRoom", playerName, (cb) => {
      setRoomCode(cb.roomId);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {roomCode}
      <button>Copy to Clipboard</button>
      {playerName}
    </div>
  );
};

export default CreateRoom;
