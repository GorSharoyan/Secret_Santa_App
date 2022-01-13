import React from "react";

export default function FormField({ name, email }) {
  return (
    <div>
      <input type="text" value={name} placeholder="name"></input>
      <input type="email" value={email} placeholder="email"></input>
    </div>
  );
}
