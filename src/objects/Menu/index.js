import React from "react";

import "./styles.css";

const handleAbout = () => {
  const about = document.querySelector(".about");
  about.classList.toggle("-active");
};

const handleClick = () => {
  handleAbout();
};

const Menu = () => {
  return (
    <a href="#menu" className="menu" onClick={handleClick}>
      <span className="center"> Menu</span>
    </a>
  );
};

export default Menu;
