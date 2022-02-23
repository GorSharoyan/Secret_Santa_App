import React from "react";
import CongratulationsComponent from "../../Components/CoangratulationsComponent/CongratulationsComponent";
import CongratsAsset from "../../Components/CongratsAsset/CongratsAsset";

//UI
import "./CongratsPage.css";

export default function CongratsPage() {
  return (
    <div className="page">
      <CongratulationsComponent />
      <CongratsAsset />
    </div>
  );
}
