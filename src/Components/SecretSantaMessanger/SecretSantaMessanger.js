import React, { useEffect, useState } from "react";

//services
import { getAllData } from "../../Services/firebase.service";
import sendMail from "../../Services/emailJS.service";

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

  const handleMailing = (e) => {
    e.preventDefault();
    sendMail({});
  };

  return (
    <form onSubmit={handleMailing}>
      <button onClick={handleMailing}>Begin Emailing </button>
    </form>
  );
}
