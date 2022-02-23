import React from "react";

//UI
import "./LandingPage.css";

//components
import LandingAsset from "../../Components/LandingAsset/LandingAsset";
import PlayerSelectionInput from "../../Components/PlayerSelectionInput/PlayerSelectionInput";
import LandingMessage from "../../Components/LandingMessage/LandingMessage";

export default function PlayingPage() {
  return (
    <div className="page">
      <LandingMessage />

      <LandingAsset />
      <PlayerSelectionInput />
    </div>
  );
}
