const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },
  user: String,
  accountName: String,
  accountNumber: String,
  balance: Number,
  currency: String,
});

module.exports = mongoose.model("Account", accountSchema);
