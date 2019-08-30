import React from "react";

import "./styles.css";

const handleAbout = () => {
  const about = document.querySelector(".about");
  about.classList.toggle("-active");
};

const handleClick = () => {
  handleAbout();
};

const IconClose = () => (
  <a href="#to-do" className="icon-close" onClick={handleClick}>
    <span className="content">fechar</span>
  </a>
);

export default IconClose;
