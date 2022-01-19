import React from "react";
//UI
import { Card } from "@mui/material";

//Components
import FormField from "../FormField/Formfield";

export default function SecretSantaCard({ number, name, email, onChange }) {
  return (
    <Card>
      <div>Secret Santa # {number}</div>
      <div>
        <FormField name={name} email={email} onChange={onChange} />
      </div>
    </Card>
  );
}
