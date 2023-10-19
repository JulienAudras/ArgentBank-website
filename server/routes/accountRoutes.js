const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
// const Account = require("../database/models/accountModel");
const tokenValidation = require("../middleware/tokenValidation");

router.get(
  "/:userId",
  tokenValidation.validateToken,
  accountController.getAccounts
);

// router.get("/:userId", accountController, async (req, res) => {
//   const userId = req.params.userId;
//   try {
//     const accounts = await Account.find({ userId: userId });
//     res.status(200).json(accounts);
//   } catch (error) {
//     res.status(500).json({ error: "error during accounts fetching" });
//   }
// });

module.exports = router;
