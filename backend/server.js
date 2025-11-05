const express = require("express");
const cors = require("cors");
// load environment variables from .env
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
// Middleware
app.use(cors());
// Allows frontend to access backend
app.use(express.json());
// Mount API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/saved', require('./routes/savedFlights'));
// Test API endpoint
app.get("/api/test", (req, res) => {
    const htmlContent = ` <div style="color: blue; font-family: Arial;">
            <h1>Welcome to the Store Dashboard!</h1>
            <p>This HTML is served from the backend.</p>
        </div>`;
    res.send(htmlContent);
});
// Connect to MongoDB then start the server
const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn('MONGO_URI not set. Skipping MongoDB connection attempt.');
        } else {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
        }

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

start();