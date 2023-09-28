import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("authToken");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: !!initialToken,
    userName: "",
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.userName = action.payload;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.userName = "";
      state.token = "";
    },
  },
});

// const isLoggedSlice = createSlice({
//   name: "isLogged",
//   initialState: false,
//   reducers: {
//     login: (state) => {
//       return true;
//     },
//     logout: (state) => {
//       return false;
//     },
//   },
// });

// const userNameSlice = createSlice({
//   name: "userName",
//   initialState: "",
//   reducers: {
//     setUserName: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// console.log(userNameSlice);

export const Store = configureStore({
  reducer: {
    // isLogged: isLoggedSlice.reducer,
    // userName: userNameSlice.reducer,
    auth: authSlice.reducer,
  },
});
