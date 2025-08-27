const express = require('express');
const router = express.Router();

// Dummy news data
const news = [
  { headline: 'Local Farmer Market Opens New Branch', date: new Date() },
  { headline: 'Mobile Health Camp in Village Next Week', date: new Date() },
  { headline: 'Government Subsidy for Solar Pumps Announced', date: new Date() },
];

router.get('/', (req, res) => {
  res.json(news);
});

module.exports = router;
