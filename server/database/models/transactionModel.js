const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  _id: String,
  account: String,
  date: String,
  description: String,
  amount: Number,
  currency: String,
  transationType: String,
  category: String,
  note: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
