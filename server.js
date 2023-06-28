const nodemailer = require("nodemailer");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

let transporter = nodemailer.createTransport(
  {
    host: process.env.smtpHost,
    port: process.env.smtpPort,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    logger: true,
    transactionLog: false, // include SMTP traffic in the logs
    allowInternalNetworkInterfaces: false,
  },
  {
    // sender info
    from: process.env.user,
  }
);

app.post("/emailSender", async (req, res) => {
  console.log(req.body);

  const message = {
    // Comma separated list of recipients
    to: "devadarshvinod205@gmail.com",

    // Subject of the message
    subject: req.body.title,

    // plaintext body
    text: req.body.message,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Error occurred");
      console.log(error.message);
      return res.json({ ok: false, error });
    }

    console.log("Message sent successfully!");
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    transporter.close();

    return res.json({ ok: true, message });
  });
});

app.listen(port, () => {
  console.log("listening on port 3001!");
});
