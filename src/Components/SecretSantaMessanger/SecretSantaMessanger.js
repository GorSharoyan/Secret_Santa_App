import React from "react";

export default function SecretSantaMessanger({ resciver }) {
  return (
    <div>
      <form action={`https://formsubmit.co/${resciver.email}`} method="POST">
        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
