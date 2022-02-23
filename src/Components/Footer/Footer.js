import React from "react";
import { makeStyles } from "@mui/styles";

//UI
import "./Footer.css";

//components
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

export default function Footer() {
  return (
    <div className="root">
      <div className="container">© Gor Sharoyan 2022 Beta</div>
      <div className="container">gor.sharoyan95@gmail.com</div>
      <SocialMediaBar />
    </div>
  );
}
