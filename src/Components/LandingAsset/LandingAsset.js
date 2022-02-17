import React from "react";

//assets
import landingAsset from "../../Assets/landingAsset.json";

//UI
import "./LandingAssetContainer.css";

//components
import AssetContainer from "../AssetContainer/AssetContainer";

export default function LandingAsset() {
  return (
    <div className="card">
      <AssetContainer assetLink={landingAsset} />
    </div>
  );
}
