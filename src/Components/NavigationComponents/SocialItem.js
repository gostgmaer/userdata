import React from "react";
import { socialURL } from "./Data";
import { Link } from "react-router-dom";

const SocialItem = ({ id, text, url, icon }) => {
  let socialColor = {
    backgroundColor: "",
  };
  switch (text) {
    case "jcb":
      socialColor["color"] = "blue";
      break;

    case "mastercard":
      socialColor["color"] = "red";
      break;
    case "americanexpress":
      socialColor["color"] = "yellow";
      break;
    case "bankcard":
      socialColor["color"] = "orange";
      break;
    case "switch":
      socialColor["color"] = "cyan";
      break;

    default:
      break;
  }

  return (
    <li className=" p-2 link-light SocialItem">
      <a
        className="text-decoration-none waves-effect waves-dark"
        target="_blank"
        rel="noreferrer"
        style={socialColor}
        href={url}
      >
        {icon}
      </a>
    </li>
  );
};

export default SocialItem;
