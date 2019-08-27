import React from "react";
import Collabcode from "../../img/logo.png";
import CollabCodeLight from "../../img/logo-light.png";

import "./styles.css";

const LogoCollab = ({ light = false }) => (
  <img
    src={light ? CollabCodeLight : Collabcode}
    className="logo-collab"
    alt="Logo da Collabcode"
  />
);

export default LogoCollab;
