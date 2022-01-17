import React, { useState } from "react";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";
import FormField from "../FormField/Formfield";

export default function SecretSantaCardGenerator() {
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([{ name: "", email: "" }]);

  const createRowsArray = () => {
    for (let i = 1; i <= playersQty; i++) {
      playersQtyArray.push(i);
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
    console.log("submition");
    console.log(inputFields);
  };

  return (
    <form>
      {playersQtyArray.map((el) => {
        return (
          <div>
            <input
              type="text"
              placeholder="name"
              value={inputFields.name}
              onChange={handleInputChange}
            ></input>
            <input
              type="email"
              placeholder="email"
              value={inputFields.email}
              onChange={handleInputChange}
            ></input>
          </div>
        );
      })}
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
