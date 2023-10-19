import { createSlice, createAction } from "@reduxjs/toolkit";
import { configureStore, createSelector } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, changeAccount } from "./apiCalls";
// import { getProfile } from "./apiCalls";

// const POST_ProfileURL = "http://localhost:3001/api/v1/user/profile";

const Token =
  localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

export const saveUserProfile = createAction("user/saveUserProfile");

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    try {
      const response = await getProfile();
      console.log("response, ", response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchChangeAccount = createAsyncThunk(
  "user/fetchChangeAccount",
  async (user) => {
    try {
      const response = await changeAccount(user);
      console.log("response from redux's change account, ", response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: !!Token,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

// export const userSlice = createSlice({
//   name: "userData",
//   initialState: {
//     profile: {},
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchUserProfile.pending]: (state) => {
//       state.loading = true;
//     },
//     [fetchUserProfile.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.profile = action.payload;
//     },
//     [fetchUserProfile.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     },
//     [saveUserProfile]: (state, action) => {
//       state.profile = action.payload;
//     },
//   },
// });

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    profile: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveUserProfile, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export const changeUserSlice = createSlice({
  name: "changeUser",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openChangeUser: (state) => {
      state.isOpen = true;
    },
    closeChangeUser: (state) => {
      state.isOpen = false;
    },
  },
});

export const { loadUserProfile } = userSlice.actions;

export const selectUserProfile = (state) => state.userData.profile;

export const selectUserName = createSelector(
  selectUserProfile,
  (profile) => profile.userName
);

export const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userData: userSlice.reducer,
    changeUser: changeUserSlice.reducer,
  },
});
