import React from "react";

//UI
import { Card, CardContent, Typography } from "@mui/material";
import "./SecretSantaCard.css";

//Components
import FormField from "../FormField/FormField";

export default function SecretSantaCard({
  number,
  name,
  email,
  onChange,
  imageLink
}) {
  return (
    <Card className="card">
      <img src={imageLink} style={{ borderRadius: "30px" }} />
      <div>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="typography"
        >
          Secret Santa {number}
        </Typography>
      </div>
      <div>
        <CardContent>
          <FormField name={name} email={email} onChange={onChange} />
        </CardContent>
      </div>
    </Card>
  );
}
