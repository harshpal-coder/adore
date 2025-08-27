const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);
