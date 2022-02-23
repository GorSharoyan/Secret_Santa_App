import React from "react";

export default function LandingMessage() {
  const today = new Date();
  const newYear = today.getFullYear() + 1;
  return (
    <div>
      <h2>
        Huraaaaaay!
        <br></br>
        {newYear} is almost here! Its time wake up the Santa!
      </h2>
    </div>
  );
}
