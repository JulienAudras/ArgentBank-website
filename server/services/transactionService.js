const Transaction = require("../database/models/transactionModel");

module.exports.getTransaction = async (accountId) => {
  try {
    const transaction = await Transaction.find({ accountId: accountId });

    console.log("accountId", accountId);
    console.log("transactions", transaction);

    if (!transaction) {
      throw new Error("Accounts not found");
    }
    if (transaction.length === 0) {
      throw new Error("Account is an empty Array");
    }

    return transaction;
  } catch (error) {
    console.error("Error in transactionService.js", error);
    throw new Error(error);
  }
};
