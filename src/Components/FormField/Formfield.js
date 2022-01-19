import React from "react";

//UI
import TextField from "@mui/material/TextField";
import "./FormField.css";

export default function FormField({ onChange }) {
  return (
    <div className="formField">
      <div className="input">
        <TextField
          variant="filled"
          type="text"
          placeholder="name"
          name="name"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          variant="filled"
          type="email"
          placeholder="email"
          name="email"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
