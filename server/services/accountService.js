const Account = require("../database/models/accountModel");

module.exports.getAccount = async (userId) => {
  try {
    const account = await Account.find({ user: userId });

    if (!account) {
      throw new Error("Accounts not found");
    }
    if (account.length === 0) {
      throw new Error("Account is an empty Array");
    }

    return account;
  } catch (error) {
    console.error("Error in accountService.js", error);
    throw new Error(error);
  }
};
