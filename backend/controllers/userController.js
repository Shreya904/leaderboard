const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: 1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    const newUser = await User.create({ name });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Claim random points
exports.claimPoints = async (req, res) => {
  const { id } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalPoints += randomPoints;
    await user.save();

    await ClaimHistory.create({
      userId: user._id,
      pointsClaimed: randomPoints,
    });

    res.json({ message: `${user.name} earned ${randomPoints} points!` });
  } catch (err) {
    res.status(500).json({ error: "Failed to claim points" });
  }
};

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });

    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      totalPoints: user.totalPoints,
    }));

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
};
