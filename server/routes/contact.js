const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, message } = req.body;
  try {
    const contact = new Contact({ name, message });
    await contact.save();
    res.status(201).json({ msg: 'Message received' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
