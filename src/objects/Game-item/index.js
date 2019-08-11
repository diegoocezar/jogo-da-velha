import React from "react";

import Circle from "../../img/icons/Circle.png";
import X from "../../img/icons/X.png";
// import { Container } from './styles';

const GameItem = () => {
  return (
    <>
      <img src={Circle} className="game-item" alt="Íconedo jogo" />
      <img src={X} className="game-item" alt="Íconedo jogo" />
    </>
  );
};
export default GameItem;
