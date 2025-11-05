const express = require('express');
const router = express.Router();
const SavedFlight = require('../models/SavedFlight');
const auth = require('../middleware/auth');

// Protect all saved flight routes
router.use(auth);

// List saved flights for user
router.get('/', async (req, res) => {
  try {
    const flights = await SavedFlight.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create saved flight
router.post('/', async (req, res) => {
  try {
    const { departure, arrival, departureDate, returnDate, price, currency, providerData } = req.body;
    if (!departure || !arrival || !departureDate) return res.status(400).json({ message: 'Missing required fields' });

    const flight = new SavedFlight({
      user: req.userId,
      departure,
      arrival,
      departureDate,
      returnDate,
      price,
      currency,
      providerData
    });
    await flight.save();
    res.status(201).json(flight);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete saved flight
router.delete('/:id', async (req, res) => {
  try {
    const flight = await SavedFlight.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!flight) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
