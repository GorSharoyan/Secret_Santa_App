import React, { useState } from "react";

//services
import { validateNumberOfPlayers } from "../../Services/validation.services";

export default function PlayerSelectionInput() {
  const [playersQty, setPlayerQty] = useState("");
  const [error, setError] = useState(false);

  const handlePlayerSelectionInput = (event) => {
    setError(validateNumberOfPlayers(event.target.value));
    setPlayerQty(event.target.value);
  };

  const handlePlayerSelectionSubmit = () => {
    if (error === false) {
      localStorage.setItem("playersQty", playersQty);
      window.location.reload();
    }
  };

  return (
    <div>
      <input
        type="number"
        onChange={handlePlayerSelectionInput}
        value={playersQty}
      ></input>
      {error ? (
        <div>
          <p>Number of players should be even</p>
        </div>
      ) : (
        <div></div>
      )}

      <button onClick={handlePlayerSelectionSubmit}>Submit</button>
    </div>
  );
}
