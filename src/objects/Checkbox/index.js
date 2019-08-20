import React from "react";
import Input from "../Input";
import Label from "../Label";

import "./styles.css";

const Checkbox = ({ id = "", content = "", value = "" }) => (
  <>
    <Input id={id} type="checkbox" value={value} content={content} />
    <Label htmlFor={id} content={content} />
  </>
);

export default Checkbox;
