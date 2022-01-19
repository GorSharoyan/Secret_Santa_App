import React from "react";

//UI
import { Card, CardContent, Typography } from "@mui/material";

//Components
import FormField from "../FormField/FormField";

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
