const Message = require("../models/message.model");
const { sendMessage } = require("../services/email.services");

const createMessageAndSend = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (name.length < 5) {
      return res.status(400).json({ success: false, message: "Name must be at least 5 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Email format is invalid" });
    }

    // Only allow gmail addresses
    const validService = "gmail.com";
    if (!email.endsWith(`@${validService}`)) {
      return res.status(400).json({ success: false, message: "Only Gmail addresses are allowed" });
    }

    if (message.length < 10) {
      return res.status(400).json({ success: false, message: "Message must be at least 10 characters long" });
    }

    const messageRegex = /^[A-Za-z0-9 .,!?'"()-]+$/;
    if (!messageRegex.test(message)) {
      return res.status(400).json({ success: false, message: "Message contains invalid characters" });
    }

    // Create message
    const newMessage = await Message.create({
      name,
      email,
      message
    });
    await sendMessage({name,email,message})

    res.status(201).json({ success: true, message: "Message created successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
    createMessageAndSend
}