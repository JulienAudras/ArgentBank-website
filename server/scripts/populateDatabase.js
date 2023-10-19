const axios = require("axios");
const signupApi = "http://localhost:3001/api/v1/user/signup";

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
    userName: "Iron",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
    userName: "Captain",
  },
];

// const accounts = [
//   {
//     user: "652e76be5876de5bb4314545",
//     accountName: "Argent Bank Checking",
//     accountNumber: "x2854",
//     balance: 208279,
//     currency: "$",
//   },
//   {
//     user: "652e76be5876de5bb4314545",
//     accountName: "Argent Bank Saving",
//     accountNumber: "x3869",
//     balance: 1092842,
//     currency: "$",
//   },
//   {
//     user: "652e76be5876de5bb4314545",
//     accountName: "Argent Bank Credit Card",
//     accountNumber: "x2854",
//     balance: 208279,
//     currency: "€",
//   },
// ];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});

// accounts.forEach((account) => {
//   axios
//     .post(accountApi, account)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// });
