import React from "react";
import "./styles.css";

const handleAbout = () => {
  const about = document.querySelector(".about");
  about.classList.toggle("-active");
};

const handleClick = () => {
  handleAbout();
};
const AboutLink = ({ className = "" }) => (
  <a href="#to-do" className={`about-link ${className}`} onClick={handleClick}>
    Sobre
  </a>
);

export default AboutLink;
