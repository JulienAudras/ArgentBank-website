import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: false,
  reducers: {
    login: (state) => {
      return true;
    },
    logout: (state) => {
      return false;
    },
  },
});

export const Store = configureStore({
  reducer: {
    isLogged: isLoggedSlice.reducer,
  },
});
