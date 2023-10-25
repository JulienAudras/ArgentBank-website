const transactionService = require("../services/transactionService");

module.exports.getTransactions = async (req, res) => {
  let response = {};

  const accountId = req.params.accountId;

  try {
    const responseFromService = await transactionService.getTransaction(
      accountId
    );
    response.status = 200;
    response.message = "Successfully got accounts transactions";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in getTransactions- transactionController.js");
    response.status = 400;
    response.message = error.message;
  }

  return res.status(response.status).json(response);
};
