import React from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";

export default function SecretSantaCardGenerator() {
  let playersQty = Number(localStorage.getItem("playersQty"));
  let playersQtyArray = [];
  for (let i = 1; i <= playersQty; i++) {
    playersQtyArray.push(i);
  }
  return (
    <div>
      {playersQtyArray.map((el) => {
        return <SecretSantaCard number={el} />;
      })}
    </div>
  );
}
