const express = require('express');
const router = express.Router();
const Email = require('../models/Email');

// Ruta para manejar el POST de un nuevo email
router.post('/save-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: 'Email saved successfully!' });
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

module.exports = router;
