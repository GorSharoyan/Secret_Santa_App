import React, { useEffect, useState } from "react";

export default function PlayerSelectionInput() {
  const [playersQty, setPlayerQty] = useState("");
  const [playersQtyArray, setPlayerQtyArray] = useState([]);

  const handlePlayerSelectionInput = (event) => {
    setPlayerQty(event.target.value);
  };

  const handlePlayerSelectionSubmit = () => {
    localStorage.setItem("playersQty", playersQty);
  };

  useEffect(() => {
    setPlayerQtyArray();
  }, [playersQty]);

  return (
    <div>
      <input
        type="number"
        onChange={handlePlayerSelectionInput}
        value={playersQty}
      ></input>
      <button onClick={handlePlayerSelectionSubmit}>Submit</button>
    </div>
  );
}
