import React from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";

export default function SecretSantaCardGenerator() {
  let playersQty = Number(localStorage.getItem("playersQty"));
  let playersQtyArray = [];
  for (let i = 0; i < playersQty; i++) {
    playersQtyArray.push("");
  }
  return (
    <div>
      {playersQtyArray.map(() => {
        return <SecretSantaCard />;
      })}
    </div>
  );
}
