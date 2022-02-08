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

  //useEffect for <script> tag creation in order to use the lib
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleMailing = () => {
    sendMail(
      "gor.sharoyan95@gmail.com",
      "gor.sharoyan95@gmail.com",
      "gago",
      "gago"
    );
  };

  return (
    <div>
      <button onClick={handleMailing}>Begin Emailing </button>
    </div>
  );
}
