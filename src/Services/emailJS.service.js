import emailjs from "@emailjs/browser";

export default function sendEmail(e) {
  emailjs
    .sendForm(
      "service_tc4kfib",
      "template_v4pvfn9",
      e,
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

// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
// .then((result) => {
//     console.log(result.text);
// }, (error) => {
//     console.log(error.text);
// });
// };
