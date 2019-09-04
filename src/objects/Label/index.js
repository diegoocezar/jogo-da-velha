import React from "react";

import "./styles.css";

const Label = ({ content, htmlFor = "" }) => (
  <label htmlFor={htmlFor} className="label">
    {content}
  </label>
);

export default Label;
