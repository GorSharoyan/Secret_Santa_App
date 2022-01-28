"use strict";
const nodemailer = require("nodemailer");
t;
let transporter = nodemailer.createTransport({
  host: "gor.sharoyan95@gmail.com",
  port: 587,
  secure: false // true for 465, false for other ports
  // auth: {
  //   user: testAccount.user, // generated ethereal user
  //   pass: testAccount.pass, // generated ethereal password
  // },
});

// send mail with defined transport object

let info = transporter.sendMail({
  from: '"Fred Foo 👻" <foo@example.com>', // sender address
  to: "bar@example.com, baz@example.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
});
