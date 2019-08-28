import React from "react";
import "./styles.css";

import AvatarProfile from "../../objects/AvatarProfile";
import AvatarImage from "../../img/profile.jpg";
import SocialIcon from "../../objects/SocialIcon";
import Github from "../../img/social-medias/github.png";
import Linkedin from "../../img/social-medias/linkedin.png";
import Facebook from "../../img/social-medias/facebook.png";
import Twitter from "../../img/social-medias/twitter.png";
import Instagram from "../../img/social-medias/instagram.png";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={AvatarImage} alt="Avatar do Diego Cezar" />
    </dd>
    <dt className="title">Diego Cezar</dt>
    <dd className="description">
      Desenvolvedor Front-end iniciando a carreira e apaixonado por JavaScript.
    </dd>
    <dd className="socials">
      <SocialIcon
        action="http://github.com/diegoocezar"
        src={Github}
        alt="Ícone do Github"
      />
      <SocialIcon
        action="http://linkedin.com/in/diegoocezar"
        src={Linkedin}
        alt="Ícone do Linkedin"
      />
      <SocialIcon
        action="http://facebook.com/dc.diegoo"
        src={Facebook}
        alt="Ícone do Facebook"
      />
      <SocialIcon
        action="https://twitter.com/diegoo_cezar"
        src={Twitter}
        alt="Ícone do Twitter"
      />
      <SocialIcon
        action="https://instagram.com/diegoocezar/"
        src={Instagram}
        alt="Ícone do Instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
