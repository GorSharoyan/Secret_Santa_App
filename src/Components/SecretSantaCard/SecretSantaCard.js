import React from "react";
//UI
import { Card, CardContent, Typography } from "@mui/material";
// import CardContent from "@mui/material/CardContent";

//Components
import FormField from "../FormField/Formfield";

export default function SecretSantaCard({ number, name, email, onChange }) {
  return (
    <Card>
      <Typography gutterBottom variant="h5" component="div">
        Secret Santa # {number}
      </Typography>
      <CardContent>
        <FormField name={name} email={email} onChange={onChange} />
      </CardContent>
    </Card>
  );
}
