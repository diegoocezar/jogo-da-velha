import React from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutLink from "./objects/AboutLink";
import IconClose from "./objects/IconClose";
import LogoCollab from "./objects/LogoCollab";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox value="show" id="show" content="Mostrar eventos" />
    <About>
      <LogoCollab light />
      <AboutLink className="-light" />
      <IconClose />
    </About>
  </main>
);

export default App;
