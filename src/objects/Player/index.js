import React from "react";

import playerO from "../../img/icons/Circle.png";
import playerX from "../../img/icons/X.png";
import "./styles.css";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  return (
    <button className="player">
      <img
        src={players[player]}
        className="game-item"
        alt={`Jogador ${player.toUpperCase()}`}
      />
    </button>
  );
};

export default Player;
