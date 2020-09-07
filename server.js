// Server 
const express = require("express");

const app = express();

// Route
app.get("/", (req, res) => res.json({msg: "Infinite Image Slider API..."}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
