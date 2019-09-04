import React, { useState } from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import GameEvent from "./objects/GameEvent";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClick = () =>
    activeAbout === "" ? setActiveAbout("-active") : setActiveAbout("");

  return (
    <main className="app">
      <Header onClick={handleClick} />
      <Hashtag />
      <Checkbox value="show" id="show" content="Mostrar eventos" />
      <GameEvent content="Adicionou X" />
      <About className={activeAbout}>
        <HeaderInternal onClick={handleClick} />
        <ProfileUser />
      </About>
    </main>
  );
};

export default App;
