import emailjs from "emailjs-com";
import React from "react";

export default function sendEmail(data) {
  emailjs
    .sendForm(
      "service_s7gpu48",
      "template_v4pvfn9",
      data,
      "user_oEXDyu2Xll8SqLLxLLIgw"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  // e.target.reset()
}
