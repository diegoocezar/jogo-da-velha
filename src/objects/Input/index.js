import React from "react";
import Label from "../Label";

// import { Container } from './styles';

const Input = ({ id, value, content }) => (
  <>
    <input id={id} type="checkbox" value={value} />
    <Label htmlFor={id} content={content} />
  </>
);

export default Input;
