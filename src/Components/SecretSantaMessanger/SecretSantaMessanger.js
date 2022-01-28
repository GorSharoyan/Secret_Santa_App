import React, { useEffect, useState } from "react";

//services
import { getAllData } from "../../Services/firebase.service";
//components
import SecretSantaMessage from "../SecretSantaMessage/SecretSantaMessage";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllData("/players").then((element) => {
      let parsedPlayerValues = Object.values(element);
      setPlayers(parsedPlayerValues);
      console.log(players);
    });
  }, []);

  return (
    <div>
      {players.map((el) => {
        console.log(el);
        console.log(el.resciever.email);
        return (
          <div key={el.resciever.id}>
            <form
              action={`https://formsubmit.co/${el.resciever.email}`}
              method="POST"
            >
              <input
                type="text"
                name="name"
                value={
                  <SecretSantaMessage
                    sender={el.resciever.name}
                    resciever={el.sender.name}
                  />
                }
              ></input>

              <button type="submit">Send</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
