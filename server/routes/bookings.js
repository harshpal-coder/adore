const express = require('express');
const Booking = require('../models/Booking');
const User = require('../models/User');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to verify JWT
function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

// Create booking (add to cart)
router.post('/', auth, async (req, res) => {
  const { products } = req.body;
  try {
    const booking = new Booking({ user: req.user.id, products });
    await booking.save();
    await User.findByIdAndUpdate(req.user.id, { $push: { bookings: booking._id } });
    res.status(201).json({ msg: 'Booking created', booking });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get user bookings
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('products');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
