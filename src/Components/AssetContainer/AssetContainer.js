import React from "react";
import { useEffect, useRef } from "react";

//UI
import Card from "@mui/material/Card";

//lottie
import lottie from "lottie-web";

export default function AssetContainer({ assetLink }) {
  const classes = useStyles();
  const container = useRef(null);
  console.log(assetLink);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: assetLink
    });
  }, []);

  return (
    <Card className={classes.root}>
      <div ref={container}></div>
    </Card>
  );
}
