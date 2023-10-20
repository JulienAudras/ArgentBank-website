const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  _id: String,
  user: String,
  accountName: String,
  accountNumber: String,
  balance: Number,
  currency: String,
});

module.exports = mongoose.model("Account", accountSchema);
