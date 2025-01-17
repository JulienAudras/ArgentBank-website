const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const tokenValidation = require("../middleware/tokenValidation");

router.get(
  "/:userId",
  tokenValidation.validateToken,
  accountController.getAccounts
);

module.exports = router;
