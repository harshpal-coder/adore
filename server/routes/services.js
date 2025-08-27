const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Dummy data for initial services
const services = [
  { name: 'Grocery Delivery', icon: '🛒' },
  { name: 'Medicine Supply', icon: '💊' },
  { name: 'Water Supply', icon: '🚰' },
  { name: 'Farming Tools', icon: '🌾' },
  { name: 'Mobile Recharge', icon: '📱' },
];

router.get('/', async (req, res) => {
  // Return static data for prototype
  res.json(services);
});

module.exports = router;
