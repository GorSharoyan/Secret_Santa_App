import React, { useEffect, useState } from "react";

//services
import { getAllData } from "../../Services/firebase.service";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(getAllData("/players"));
    console.log(players);
  }, []);
  return (
    <div>
      <form action={`https://formsubmit.co/$`} method="POST">
        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
