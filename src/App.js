import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";

const App = () => (
  <main className="app">
    <Header />
    <About />
    <Hashtag />
    <Checkbox value="show" id="show" content="Mostrar eventos" />
  </main>
);

export default App;
