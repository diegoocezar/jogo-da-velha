import React from "react";
import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <LogoCollab />
      <AboutLink />
      <Menu />
    </header>
  );
};

export default Header;
