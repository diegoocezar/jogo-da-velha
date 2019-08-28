import React from "react";
// import "./styles.css";

const SocialIcon = ({ src, alt, action = "#" }) => (
  <a href={action}>
    <img src={src} alt={alt} className="social-icon" />
  </a>
);

export default SocialIcon;
