import React from "react";
import { makeStyles } from "@mui/styles";

//UI
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="root">
      <ul className="contacts-bar">
        <li>© Gor Sharoyan 2022 Beta</li>
        <li>gor.sharoyan95@gmail.com</li>
      </ul>
      <ul className="social-media-bar">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
      </ul>
    </div>
  );
}
