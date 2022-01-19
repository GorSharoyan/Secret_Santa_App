import React from "react";

//UI
import TextField from "@mui/material/TextField";

export default function FormField({ onChange }) {
  return (
    <div>
      <TextField
        type="text"
        placeholder="name"
        name="name"
        onChange={onChange}
      />
      <TextField
        type="email"
        placeholder="email"
        name="email"
        onChange={onChange}
      />
    </div>
  );
}
