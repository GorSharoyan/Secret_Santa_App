import React from "react";

//UI
import "./LandingPage.css";

//components
import LandingAsset from "../../Components/LandingAsset/LandingAsset";
import PlayerSelectionInput from "../../Components/PlayerSelectionInput/PlayerSelectionInput";
import LandingMessage from "../../Components/LendingMessage/LendingMessage";

export default function PlayingPage() {
  const today = new Date();
  const newYear = today.getFullYear() + 1;
  return (
    <div className="page">
      <LandingMessage />
      <PlayerSelectionInput />
      <LandingAsset />
    </div>
  );
}
