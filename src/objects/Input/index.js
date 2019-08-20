import React from "react";

// import { Container } from './styles';

const Input = ({ id = "", value = "", type = "checkbox", content = "" }) => (
  <input class="input" id={id} type={type} value={value} content={content} />
);

export default Input;
