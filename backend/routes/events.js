const express = require('express');
const Event = require('../models/Event');
const protect = require('../middleware/auth');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add an event (protected)
router.post('/', protect, async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = new Event({ title, description, date });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
