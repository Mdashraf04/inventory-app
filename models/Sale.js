const mongoose = require("mongoose");
const Product = require("./Product");

const saleSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantitySold: { type: Number, required: true, min: 1 },
  sellingPrice: { type: Number, required: true, min: 0 },
  totalAmount: Number,
  date: { type: Date, default: Date.now },
  soldBy: { type: String, required: true },
});

// Auto-calculate and validate stock before saving
saleSchema.pre("save", async function (next) {
  const product = await Product.findById(this.product);
  if (!product) return next(new Error("Product not found"));

  if (product.stock < this.quantitySold) {
    return next(new Error("Insufficient stock"));
  }

  this.totalAmount = this.quantitySold * this.sellingPrice;
  next();
});

module.exports = mongoose.model("Sale", saleSchema);
