const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const ClaimHistory = require("./models/ClaimHistory");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.get("/api/history", async (req, res) => {
  const history = await ClaimHistory.find()
    .sort({ timestamp: -1 })
    .populate("userId", "name"); // populate with user name

  res.json(history);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
