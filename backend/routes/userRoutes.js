const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.post("/users/:id/claim", userController.claimPoints);
router.get("/leaderboard", userController.getLeaderboard);

module.exports = router;
