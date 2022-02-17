import React, { useEffect, useState, useRef } from "react";

//services
import { getAllData } from "../../Services/firebase.service";
import sendMail from "../../Services/emailJS.service";

// //components
// import SecretSantaMessage from "../SecretSantaMessage/SecretSantaMessage";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllData("/players").then((element) => {
      let parsedPlayerValues = Object.values(element);
      setPlayers(parsedPlayerValues);
    });
    console.log(players);
  }, []);

  const handleMailing = (e) => {
    e.preventDefault();
    players.map((e) => {
      sendMail({
        rescievers_email: e.resciever.email,
        message: `
         <div>
            <h3>Congratulations!!!</h3>
            <h5>Dear ${e.resciever.name}</h5>
            <p>
              We are happy to inform you that you are a ${e.sender.name}'s Secret
              Santa this year!!!
            </p>
            <h5>
            Merry Christmas and Happy New Year!!!
            </h5>
          </div>`
      });
    });
  };

  return (
    <form onSubmit={handleMailing}>
      <button onClick={handleMailing}>Begin Emailing </button>
    </form>
  );
}
