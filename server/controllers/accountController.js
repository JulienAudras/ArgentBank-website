// const accountService = require("../services/accountService");

// module.exports.getAccounts = async (req, res) => {
//   // console.log("req", req);
//   let response = {
//     status: 200,
//     message: "Successfully got user accounts",
//     body: {},
//   };

//   const userId = req.params.userId;

//   try {
//     const responseFromService = await accountService.getAccounts(userId);
//     response.status = 200;
//     response.message = "Successfully got user accounts";
//     response.body = responseFromService;
//   } catch (error) {
//     console.log("Error in getAccounts - userController.js");
//     response.status = 400;
//     response.message = error.message;
//   }
// };
const accountService = require("../services/accountService");

module.exports.getAccounts = async (req, res) => {
  // let response = {
  //   status: 200,
  //   message: "Successfully got user accounts",
  //   body: {},
  // };
  let response = {};

  const userId = req.params.userId;

  try {
    const responseFromService = await accountService.getAccount(userId);
    response.status = 200;
    response.message = "Successfully got user accounts";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in getAccounts - accountController.js");
    response.status = 400;
    response.message = error.message;
  }

  // Renvoyer la réponse
  return res.status(response.status).json(response);
};
