import React from "react";

export default function FormField({ name, email, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={onChange}
      ></input>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={onChange}
      ></input>
    </div>
  );
}
