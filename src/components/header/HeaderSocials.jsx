import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/jonathanrsolis"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.github.com/jonathansolis21"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
