import React from "react";
import { socialURL } from "./Data";
import SocialItem from "./SocialItem";

const Socialnavigation = () => {
  return (
    <ul className="Socialnavigation nav  social-network" >
      {socialURL.map((social) => {
        // const {id,text,url,icon}=social
        return <SocialItem key={social.id} {...social}></SocialItem>;
      })}
    </ul>
  );
};

export default Socialnavigation;
