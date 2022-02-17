import emailjs from "@emailjs/browser";

export default function sendEmail(template) {
  emailjs.send("service_tc4kfib", "template_v4pvfn9", template).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

export function sendEmailMessage(rescieverEmail, rescieversName, sendersName) {
  return sendEmail({
    rescievers_email: rescieverEmail,
    message: `
     <div>
        <h3>Congratulations!!!</h3>
        <h5>Dear ${rescieversName}</h5>
        <p>
          We are happy to inform you that you are a ${sendersName}'s Secret
          Santa this year!!!
        </p>
        <h5>
        Merry Christmas and Happy New Year!!!
        </h5>
      </div>`
  });
}
