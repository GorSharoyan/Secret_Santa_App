import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { init } from "@emailjs/browser";

//components
import SecretSantaCard from "../SecretSantaCard/SecretSantaCard";
import Pagination from "../Pagination/Pagination";

//UI
import "./SecretSantaCardGenerator.css";
import { Button } from "@mui/material";

//assets
import SantaImagesArray from "../../Assets/SantaImages/santaImages";
//services
import randomiseArray, {
  createPlayerPairs
} from "../../Services/randomiseArray.service";
import { sendEmailMessage } from "../../Services/emailJS.service";
import { validatePlayerCardData } from "../../Services/validation.services";

export default function SecretSantaCardGenerator() {
  //players quantity hooks
  const playersQty = Number(localStorage.getItem("playersQty"));
  const playersQtyArray = [];
  const [inputFields, setInputFields] = useState([
    { id: "", name: "", email: " " }
  ]);
  let error = true;
  // const [error, setError] = useState(true);
  const navigate = useNavigate();
  //Mailing Client
  init("user_oEXDyu2Xll8SqLLxLLIgw");

  // pagination hooks
  const playersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const createRowsArray = () => {
    for (let i = 0; i < playersQty; i++) {
      playersQtyArray.push({ id: i, name: "", email: "" });
    }
  };

  createRowsArray();

  const lastPlayerIndex = currentPage * playersPerPage;
  const firstPlayerIndex = lastPlayerIndex - playersPerPage;
  const currentPlayers = playersQtyArray.slice(
    firstPlayerIndex,
    lastPlayerIndex
  );

  //handlers
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    error = validatePlayerCardData(inputFields);
    if (error === false) {
      const playerPairs = createPlayerPairs(randomiseArray(inputFields));
      await playerPairs.map((e) =>
        sendEmailMessage(e.resciever.email, e.resciever.name, e.sender.name)
      );
      await navigate("/congratsPage");
    }
  };

  const handlePageChange = (pageNumber) => {
    setInputFields(inputFields);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setInputFields(playersQtyArray);
  }, []);

  return (
    <div>
      <form>
        <div className="cardBox">
          {currentPlayers.map((el) => {
            return (
              <div key={el.id}>
                <SecretSantaCard
                  imageLink={SantaImagesArray[Math.floor(Math.random() * 10)]}
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
          handlePageChange={handlePageChange}
        />
        <div>
          {error ? (
            <div>
              <p>Some inputs are empty</p>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
        <div className="button">
          <Button onClick={handleFormSubmit} variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
