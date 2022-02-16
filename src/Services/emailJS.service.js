import emailjs from "@emailjs/browser";

// export default function sendEmail(e) {
//   emailjs
//     .send(
//       "service_tc4kfib",
//       "template_v4pvfn9",
//       e,
//       "user_oEXDyu2Xll8SqLLxLLIgw"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   // e.target.reset()
// }
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
