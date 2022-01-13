import React from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";

export default function SecretSantaCardGenerator() {
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];

  const createRowsArray = () => {
    for (let i = 1; i <= playersQty; i++) {
      playersQtyArray.push(i);
    }
  };

  createRowsArray();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submition");
  };

  return (
    <form>
      {playersQtyArray.map((el) => {
        return <SecretSantaCard number={el} />;
      })}
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
