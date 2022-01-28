import React from "react";

export default function SecretSantaMessage({ sender, resciever }) {
  console.log("sender", sender);
  return (
    <div>
      <h1>Congratulations!!!</h1>
      <h2>Dear {sender}</h2>
      <p>
        We are happy to inform you that you are a {resciever}'s secret Santa
        this year!!! Merry Christmas and Happy New Year!!!
      </p>
    </div>
  );
}
