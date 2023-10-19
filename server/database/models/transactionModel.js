const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  date: Date,
  description: String,
  amount: Number,
  currency: String,
  transationType: String,
  category: String,
  note: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
