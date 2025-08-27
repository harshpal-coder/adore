const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Dummy data for initial products
const products = [
  { name: 'Bread', price: 20, image: '🍞' },
  { name: 'Butter', price: 50, image: '🧈' },
  { name: 'Rice', price: 40, image: '🍚' },
  { name: 'Milk', price: 25, image: '🥛' },
  { name: 'Paracetamol', price: 10, image: '💊' },
  { name: 'Soap', price: 15, image: '🧼' },
];

router.get('/', async (req, res) => {
  // Return static data for prototype
  res.json(products);
});

module.exports = router;
