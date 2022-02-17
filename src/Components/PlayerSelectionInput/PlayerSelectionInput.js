import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//services
import { validateNumberOfPlayers } from "../../Services/validation.services";

export default function PlayerSelectionInput() {
  const [playersQty, setPlayerQty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlePlayerSelectionInput = (event) => {
    setError(validateNumberOfPlayers(event.target.value));
    setPlayerQty(event.target.value);
  };

  const handlePlayerSelectionSubmit = async (event) => {
    event.preventDefault();
    if (error === false) {
      await localStorage.setItem("playersQty", playersQty);
      await navigate("/playingPage");
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
