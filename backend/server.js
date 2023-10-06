// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000; // You can change this port to any available port you want

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lau.petit0@gmail.com',
      pass: 'xrjdrksmwgwetgbt',
    },
  });

  const mailOptions = {
    from: email,
    to: 'lau.petit0@gmail.com', // Change this to the email where you want to receive the messages
    subject: subject,
    text: `${name} (${email}) says: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
