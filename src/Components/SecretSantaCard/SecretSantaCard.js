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
      <div className="upperCard">
        <img src={imageLink} style={{ borderRadius: "30px" }} />
        <br></br>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="typography"
        >
          Secret Santa {number}
        </Typography>
      </div>
      <div className="lowerCard">
        <CardContent>
          <FormField name={name} email={email} onChange={onChange} />
        </CardContent>
      </div>
    </Card>
  );
}
