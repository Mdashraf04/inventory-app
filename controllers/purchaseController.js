const Purchase = require("../models/Purchase");
const Product = require("../models/Product");

exports.addPurchase = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();

    // Increase product stock
    await Product.findByIdAndUpdate(purchase.product, {
      $inc: { stock: purchase.quantity },
    });

    res.status(201).json(purchase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find()
      .populate("product supplier")
      .sort({ date: -1 });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
