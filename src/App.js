import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutLink from "./objects/AboutLink";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox value="show" id="show" content="Mostrar eventos" />
    <About>
      <AboutLink className="-light" />
    </About>
  </main>
);

export default App;
