// routes/favorites.js
const express = require("express");
const Favorite = require("../models/Favorite");
const router = express.Router();

// Add a book to favorites
router.post("/add", async (req, res) => {
    const { bookId, userId } = req.body;

    if (!bookId || !userId) {
        return res.status(400).json({ success: false, message: "Book ID and User ID are required." });
    }

    try {
        const newFavorite = new Favorite({ bookId, userId });
        await newFavorite.save();
        res.status(200).json({ success: true, message: "Book added to favorites!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error adding to favorites." });
    }
});

// Get all favorite books for a user
router.get("/user/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const favorites = await Favorite.find({ userId }).populate("bookId");
        res.status(200).json({ success: true, data: favorites });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching favorites." });
    }
});

module.exports = router;
