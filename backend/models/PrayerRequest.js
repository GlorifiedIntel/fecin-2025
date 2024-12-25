const mongoose = require('mongoose');

const prayerRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  request: { type: String, required: true },
});

module.exports = mongoose.model('PrayerRequest', prayerRequestSchema);
