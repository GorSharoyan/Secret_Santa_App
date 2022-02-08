import React, { useEffect, useState } from "react";

//services
import { getAllData } from "../../Services/firebase.service";
import sendMail from "../../Services/emailJS.service";

//components
import SecretSantaMessage from "../SecretSantaMessage/SecretSantaMessage";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);

  //useEffect for players names encapsulation
  useEffect(() => {
    getAllData("/players").then((element) => {
      let parsedPlayerValues = Object.values(element);
      setPlayers(parsedPlayerValues);
    });
  }, []);

  const handleMailing = () => {
    console.log(players);
  };

  return (
    <div>
      <button onClick={handleMailing}>Begin Emailing </button>
    </div>
  );
}
