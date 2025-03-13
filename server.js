const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// Simulated railway track fault data (Replace with actual ML model results)
const faultData = [
    { id: 1, track: "A12", issue: "Fault detected", image: "pictures/fault1.jpg" },
    { id: 2, track: "B7", issue: "Crack detected", image: "pictures/fault2.jpg" },
    { id: 3, track: "C5", issue: "Misalignment", image: "pictures/fault3.jpg" },
];

// Endpoint to get fault data
app.get("/faults", (req, res) => {
    res.json(faultData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
