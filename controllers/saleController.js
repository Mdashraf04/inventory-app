const Sale = require("../models/Sale");
const Product = require("../models/Product");

exports.addSale = async (req, res) => {
  try {
    const { product, quantitySold } = req.body;
    const item = await Product.findById(product);

    if (!item) return res.status(404).json({ message: "Product not found" });
    if (item.stock < quantitySold)
      return res.status(400).json({ message: "Not enough stock available" });

    const sale = new Sale(req.body);
    await sale.save();

    // Decrease product stock
    await Product.findByIdAndUpdate(product, { $inc: { stock: -quantitySold } });

    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("product").sort({ date: -1 });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
