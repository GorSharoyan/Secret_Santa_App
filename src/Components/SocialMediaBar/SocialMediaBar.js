import React from "react";
import { Link } from "react-router-dom";

//UI
import "./SocialMediaBar.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialMediaBar() {
  return (
    <div className="root">
      <FacebookIcon className="element" />
      <LinkedInIcon className="element" />
      <InstagramIcon className="element" />
      <GitHubIcon className="element" />
    </div>
  );
}
