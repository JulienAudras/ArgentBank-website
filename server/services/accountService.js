const Account = require("../database/models/accountModel");

// const userId = req.params.userId;

module.exports.getAccount = async (userId) => {
  try {
    const account = await Account.find({ user: userId });

    console.log("userId", userId);
    console.log("account", account);

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
