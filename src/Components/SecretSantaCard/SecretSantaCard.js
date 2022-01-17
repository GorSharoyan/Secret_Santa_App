import React from "react";
//UI
// import { Card } from "@mui/material";

//Formik
import { Formik } from "formik";

//Components
import FormField from "../FormField/Formfield";

export default function SecretSantaCard({ number }) {
  return (
    <div>
      <div>Secret Santa # {number}</div>
      <div>
        <FormField />
      </div>
    </div>
  );
}
