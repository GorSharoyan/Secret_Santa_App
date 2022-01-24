import React, { useState, useEffect } from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";

//UI
import "./SecretSantaCardGenerator.css";
import { Button } from "@mui/material";

//services
import randomiseArray, {
  createPlayerPairs
} from "../../Services/randomiseArray.service";

export default function SecretSantaCardGenerator() {
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([
    { id: "", name: "", email: " " }
  ]);

  const createRowsArray = () => {
    for (let i = 0; i < playersQty; i++) {
      playersQtyArray.push({ id: i, name: "", email: "" });
    }
  };

  createRowsArray();

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleFormSubmit = () => {
    const inputValues = inputFields;
    const randomisedValues = randomiseArray(inputValues);
    const playerPairs = createPlayerPairs(randomisedValues);
    localStorage.setItem("playersList", playerPairs);
  };

  useEffect(() => {
    setInputFields(playersQtyArray);
  }, []);

  return (
    <form>
      <div className="cardBox">
        {playersQtyArray.map((el) => {
          return (
            <div>
              <SecretSantaCard
                number={el.id + 1}
                name="name"
                email="email"
                onChange={(event) => handleInputChange(el.id, event)}
              />
            </div>
          );
        })}
      </div>
      <div className="button">
        <Button onClick={handleFormSubmit} variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
}