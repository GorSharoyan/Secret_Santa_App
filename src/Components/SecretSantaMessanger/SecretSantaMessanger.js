import React, { useEffect, useState } from "react";

export default function SecretSantaMessanger() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const playersList = JSON.parse(localStorage.getItem("playersList"));
    console.log(playersList);
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
