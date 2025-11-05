const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    departureDate: { type: Date, required: true },
    returnDate: { type: Date },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    providerData: { type: mongoose.Schema.Types.Mixed },
    savedAt: { type: Date, default: Date.now }
});

savedFlightSchema.index({ user: 1, departure: 1, arrival: 1, departureDate: 1 });

module.exports = mongoose.model('SavedFlight', savedFlightSchema);