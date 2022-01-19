import React, { useState, useEffect } from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";
import FormField from "../FormField/Formfield";

export default function SecretSantaCardGenerator() {
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([
    { id: "", name: "", email: " " }
  ]);

  const createRowsArray = () => {
    for (let i = 0; i <= playersQty; i++) {
      playersQtyArray.push({ id: i, name: "", email: "" });
    }
  };

  createRowsArray();

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
    localStorage.setItem("playerNames", inputFields);
  };

  useEffect(() => {
    setInputFields(playersQtyArray);
  }, []);

  return (
    <form>
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
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
