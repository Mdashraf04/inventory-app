const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  costPrice: { type: Number, required: true, min: 0 },
  totalCost: Number,
  date: { type: Date, default: Date.now },
  purchasedBy: { type: String, required: true },
});

purchaseSchema.pre("save", function (next) {
  this.totalCost = this.quantity * this.costPrice;
  next();
});

module.exports = mongoose.model("Purchase", purchaseSchema);
