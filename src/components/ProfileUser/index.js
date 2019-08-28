import React from "react";
import "./styles.css";

import AvatarProfile from "../../objects/AvatarProfile";
import AvatarImage from "../../img/profile.jpg";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={AvatarImage} alt="Avatar do Diego Cezar" />
    </dd>
    <dt className="title">Diego Cezar</dt>
    <dd className="description">
      Desenvolvedor Front-end iniciando a carreira e apaixonado por JavaScript.
    </dd>
  </dl>
);

export default ProfileUser;
