const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASS,
  },
});

// Modern Email HTML template
const MessageBox = ({ name, email, message }) => `
  <div style="
    font-family: 'Segoe UI', Arial, sans-serif;
    background-color: #f4f6f8;
    padding: 30px;
  ">
    <div style="
      max-width: 520px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      padding: 24px;
    ">
      <h2 style="
        margin: 0 0 16px;
        color: #111827;
        font-size: 20px;
        text-align: center;
      ">
         New Contact Message
      </h2>

      <div style="margin-bottom: 14px;">
        <p style="
          margin: 0;
          font-size: 14px;
          color: #6b7280;
        ">Name</p>
        <p style="
          margin: 4px 0 0;
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        ">${name}</p>
      </div>

      <div style="margin-bottom: 14px;">
        <p style="
          margin: 0;
          font-size: 14px;
          color: #6b7280;
        ">Email</p>
        <p style="
          margin: 4px 0 0;
          font-size: 16px;
          color: #2563eb;
        ">${email}</p>
      </div>

      <div style="margin-top: 20px;">
        <p style="
          margin: 0 0 6px;
          font-size: 14px;
          color: #6b7280;
        ">Message</p>
        <div style="
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 14px;
          font-size: 15px;
          line-height: 1.6;
          color: #111827;
        ">
          ${message}
        </div>
      </div>

      <p style="
        margin-top: 24px;
        font-size: 12px;
        color: #9ca3af;
        text-align: center;
      ">
        Sent from your website contact form
      </p>
    </div>
  </div>
`;


// Send email function
exports.sendMessage = async ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIEVER_EMAIL,
    subject: "Message From Portfolio Contact",
    html: MessageBox({ name, email, message }),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { status: "sent", info };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send message email");
  }
};
