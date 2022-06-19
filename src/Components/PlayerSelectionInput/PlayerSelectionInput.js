import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//services
import { validateNumberOfPlayers } from "../../Services/validation.services";

export default function PlayerSelectionInput() {
  const [playersQty, setPlayerQty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlePlayerSelectionInput = (event) => {
    setPlayerQty(event.target.value);
  };

  const handlePlayerSelectionSubmit = async (event) => {
    event.preventDefault();
    if (error === false) {
      await localStorage.setItem("playersQty", playersQty);
      await navigate("/playingPage");
    }
  };
  useEffect(() => {
    setError(validateNumberOfPlayers(playersQty));
  }, [playersQty]);

  return (
    <div>
      <h4>Please select the number of players</h4>
      <input
        type="number"
        onChange={handlePlayerSelectionInput}
        value={playersQty}
      ></input>
      {error ? (
        <div>
          <p>Input Empty</p>
        </div>
      ) : (
        <div></div>
      )}

      <button onClick={handlePlayerSelectionSubmit}>Submit</button>
    </div>
  );
}
