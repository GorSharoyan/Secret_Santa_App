import React, { useEffect, useState } from "react";

//services
import { getAllData } from "../../Services/firebase.service";
import sendGridMailer from "../../Services/sendgrid.service";

//components
import SecretSantaMessage from "../SecretSantaMessage/SecretSantaMessage";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllData("/players").then((element) => {
      let parsedPlayerValues = Object.values(element);
      setPlayers(parsedPlayerValues);
    });
  }, []);

  const handleMailing = async () => {
    await players.map((el) => {
      sendGridMailer.send(
        <SecretSantaMessage sender={el.resciever} resciever={el.sender} />
      );
    });
    await console.log("Mailing done succefully ");
  };

  return (
    <div>
      <button onClick={handleMailing}>Begin Emailing </button>
    </div>
  );
}
