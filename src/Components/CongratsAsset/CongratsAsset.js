import React from "react";

//assets
import congratsAsset from "../../Assets/congratsAsset.json";

//UI
import "./CongratsAsset.css";

//components
import AssetContainer from "../AssetContainer/AssetContainer";

export default function CongratsAsset() {
  return (
    <div className="card">
      <AssetContainer assetLink={congratsAsset} />
    </div>
  );
}
