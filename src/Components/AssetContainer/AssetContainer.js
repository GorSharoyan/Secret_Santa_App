import React from "react";
import { useEffect, useRef } from "react";

//UI
import Card from "@mui/material/Card";
// import "../AssetContainer/AssetContainer.css";

//lottie
import lottie from "lottie-web";

export default function AssetContainer({ assetLink }) {
  const container = useRef(null);
  console.log(assetLink);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: assetLink
    });
  }, []);

  return <div ref={container}></div>;
}
