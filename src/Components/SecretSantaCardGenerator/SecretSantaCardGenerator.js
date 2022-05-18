import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { init } from "@emailjs/browser";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";
import Pagination from "../Pagination/Pagination";

//UI
import "./SecretSantaCardGenerator.css";
import { Button } from "@mui/material";

//services
import randomiseArray, {
  createPlayerPairs
} from "../../Services/randomiseArray.service";
import { sendEmailMessage } from "../../Services/emailJS.service";

export default function SecretSantaCardGenerator() {
  //players quntity hooks
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([
    { id: "", name: "", email: " " }
  ]);
  // pagination hooks
  const [playersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  //navigation hooks
  const navigate = useNavigate();
  //Mailing Client hooks
  init("user_oEXDyu2Xll8SqLLxLLIgw");

  const lastPlayerIndex = currentPage * playersPerPage;
  const firstPlayerIndex = lastPlayerIndex - playersPerPage;
  const currentPlayers = playersQtyArray.slice(
    firstPlayerIndex,
    lastPlayerIndex
  );

  const createRowsArray = () => {
    for (let i = 0; i < playersQty; i++) {
      playersQtyArray.push({ id: i, name: "", email: "" });
    }
  };

  createRowsArray();

  //handlers
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleFormSubmit = async () => {
    const inputValues = inputFields;
    const randomisedValues = randomiseArray(inputValues);
    const playerPairs = createPlayerPairs(randomisedValues);
    await playerPairs.map((e) =>
      sendEmailMessage(e.resciever.email, e.resciever.name, e.sender.name)
    );
    await navigate("/congratsPage");
  };

  const handelPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setInputFields(playersQtyArray);
  }, []);

  return (
    <form>
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
      <Pagination
        currentCards={playersPerPage}
        totalCards={playersQtyArray.length}
        handlePageChange={handelPageChange}
      />
      <div className="button">
        <Button onClick={handleFormSubmit} variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
}
