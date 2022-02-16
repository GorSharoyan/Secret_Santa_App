import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";

//UI
import "./SecretSantaCardGenerator.css";
import { Button } from "@mui/material";

//services
import randomiseArray, {
  createPlayerPairs
} from "../../Services/randomiseArray.service";
import { createData } from "../../Services/firebase.service";
import sendMail from "../../Services/emailJS.service";

export default function SecretSantaCardGenerator() {
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([
    { id: "", name: "", email: " " }
  ]);
  const navigate = useNavigate();
  const form = useRef();

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

  const handleFormSubmit = async () => {
    const inputValues = inputFields;
    const randomisedValues = randomiseArray(inputValues);
    const playerPairs = createPlayerPairs(randomisedValues);
    await createData("/players/", playerPairs);
    // await sendMail(form.current);
    await navigate("/messanger");
  };

  useEffect(() => {
    setInputFields(playersQtyArray);
  }, []);

  return (
    <form ref={form}>
      <div className="cardBox">
        {playersQtyArray.map((el) => {
          return (
            <div key={el.id}>
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
