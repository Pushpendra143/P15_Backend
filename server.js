const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
// GET /message → Returns a welcome message in JSON.
app.get('/message', (req, res) => {
  res.json({ message: "Welcome to the Practical 15 Backend!" });
});

// POST /submit → Accepts a JSON object and returns a confirmation.
app.post('/submit', (req, res) => {
  const data = req.body;
  
  if (!data) {
    return res.status(400).json({ success: false, message: "No data provided" });
  }

  // Simulate processing the data
  console.log("Received data:", data);

  res.json({ 
    success: true, 
    message: "Data received successfully!",
    receivedData: data 
  });
});

// Default route for testing
app.get('/', (req, res) => {
  res.send('Backend Server is Running.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
