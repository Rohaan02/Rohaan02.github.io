const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    await pool.execute(
      "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );
    return res.status(201).json({ success: true });
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return res.status(500).json({ success: false, error: "Failed to save message." });
  }
});

module.exports = router;
