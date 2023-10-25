const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const tokenValidation = require("../middleware/tokenValidation");

router.get(
  "/:accountId",
  tokenValidation.validateToken,
  transactionController.getTransactions
);

module.exports = router;
