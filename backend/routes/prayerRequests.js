const express = require('express');
const PrayerRequest = require('../models/PrayerRequest');
const protect = require('../middleware/auth');
const router = express.Router();

// Get all prayer requests
router.get('/', async (req, res) => {
  try {
    const prayerRequests = await PrayerRequest.find();
    res.json(prayerRequests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit a prayer request
router.post('/', protect, async (req, res) => {
  const { name, request } = req.body;
  try {
    const prayerRequest = new PrayerRequest({ name, request });
    await prayerRequest.save();
    res.status(201).json(prayerRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
