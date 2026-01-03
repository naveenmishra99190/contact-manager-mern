const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// CORS Configuration - allows frontend to connect
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/contacts', require('./routes/contacts'));

// Health check route - to verify backend is working
app.get('/', (req, res) => {
  res.json({ 
    message: 'Contact Manager API is running', 
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});