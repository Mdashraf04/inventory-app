// routes/purchaseRoutes.js
const express = require("express");
const router = express.Router();
const Purchase = require("../models/Purchase");

// POST /api/purchases → Add new purchase
router.post("/", async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).json(purchase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/purchases → View all purchase records
router.get("/", async (req, res) => {
  try {
    const purchases = await Purchase.find()
      .populate("supplier")
      .populate("product");
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
