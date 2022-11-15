import React, { useState } from "react";
import rgbToHex from "./utils";
import { async } from '@firebase/util';

const ColorLists = ({ rgb, weight, type, hex, index }) => {
  const [alery, setalery] = useState(false);
  const bcg = rgb.join(",");

  hex = rgbToHex(...rgb);
  const copytoCLipboard = async (e) => {
    // e.preventDefault()

    setalery(true);
await navigator.clipboard.writeText(e);
    console.log('your ColorCode is:', e );
    setTimeout(() => {
      setalery(false);
    }, 3000);
  };

  return (
    <div class="card col-2">
      <div
        class={`card-body ${
          weight > 0 && type === "shade" ? `text-light` : "text-dark"
        }`}
        onClick={(e) => copytoCLipboard(hex)}
        style={{ backgroundColor: hex }}
      >
        <h4 class="card-title">{weight}%</h4>
        <p class="card-text">{hex}</p>
        {alery ? (
          <p
            className={`${
              weight > 0 && type === "shade" ? `text-light` : "text-dark"
            }`}
          >
            Color has been Copyed
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ColorLists;
