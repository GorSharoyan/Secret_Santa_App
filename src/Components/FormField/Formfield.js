import React from "react";

//UI
import TextField from "@mui/material/TextField";

export default function FormField({ name, email, onChange }) {
  return (
    <TextField />
    // <div>
    //   <input
    //     type="text"
    //     value={name}
    //     placeholder="name"
    //     onChange={onChange}
    //   ></input>
    //   <input
    //     type="email"
    //     value={email}
    //     placeholder="email"
    //     onChange={onChange}
    //   ></input>
    // </div>
  );
}
