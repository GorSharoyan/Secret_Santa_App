import React from "react";

//UI
import "./LandingPage.css";

//components
import LandingAsset from "../../Components/LandingAsset/LandingAsset";
import PlayerSelectionInput from "../../Components/PlayerSelectionInput/PlayerSelectionInput";

export default function PlayingPage() {
  const today = new Date();
  const newYear = today.getFullYear() + 1;
  return (
    <div className="page">
      <h2>
        Huraaaaaay!
        <br></br>
        {newYear} is almost here! Its time wake up the Santa!
      </h2>
      <PlayerSelectionInput />
      <LandingAsset />
    </div>
  );
}
