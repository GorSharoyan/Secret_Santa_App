const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.mailtrap.io",
    port: 25,
    secure: true,
    auth: {
      user: "b72c5ba69c29a0",
      pass: "ea22fa85b100bb"
    }
  },
  {
    from: "Mailer Test <gor.sharoyan95@mail.ru>"
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
