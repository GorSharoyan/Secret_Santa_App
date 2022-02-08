import emailjs from "emailjs-com";
import React from "react";

export default function sendEmail(data) {
  emailjs
    .sendForm("gmail", "youtube_template", data, "user_JABO21I8Gm6sxByJH17Nu")
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
