import React from "react";

import "./styles.css";

const IconClose = ({ onClick }) => (
  <a href="#to-do" className="icon-close" onClick={onClick}>
    <span className="content">fechar</span>
  </a>
);

export default IconClose;
