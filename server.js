// server.js
import express from "express";
import cors from "cors"; // Import the cors package
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

// Step 1: Use CORS middleware to allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this frontend domain
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Step 2: Define the POST route to handle form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password", // Use environment variables for better security
    },
  });

  const mailOptions = {
    from: email,
    to: "your-email@gmail.com",
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email", error });
    }
    return res.status(200).json({ message: "Email sent successfully", info });
  });
});

// Step 3: Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
