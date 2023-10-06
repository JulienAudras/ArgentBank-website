import { createSlice } from "@reduxjs/toolkit";
import { configureStore, createSelector } from "@reduxjs/toolkit";
// import { getProfile } from "./apiCalls";

// const POST_ProfileURL = "http://localhost:3001/api/v1/user/profile";

const Token =
  localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

// export const fetchUserProfile = createAsyncThunk(
//   "user/fetchUserProfile",
//   async () => {
//     try {
//       const response = await fetch(POST_ProfileURL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${Token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Something went wrong with the profile's request");
//       }

//       const data = await response.json();
//       return data.body;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: !!Token,
    // user: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      // state.user = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      // state.user = "";
    },
  },
});

const userSlice = createSlice({
  name: "userData",
  initialState: {
    profile: {
      // userName: "",
      // firstName: "",
      // lastName: "",
      // emailAddress: "",
      // id: "",
    },
    loading: "idle",
    error: null,
  },
  reducers: {
    loadUserProfile: (state, action) => {
      state.loading = "pending";
    },
    saveUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  // {
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchUserProfile.pending, (state) => {
  //         state.loading = "pending";
  //       })
  //       .addCase(fetchUserProfile.fulfilled, (state, action) => {
  //         state.loading = "idle";
  //         state.profile = action.payload.body;
  //       })
  //       .addCase(fetchUserProfile.rejected, (state, action) => {
  //         state.loading = "idle";
  //         state.error = action.error.message;
  //       });
  //   },
  // },
});

export const { loadUserProfile, saveUserProfile } = userSlice.actions;

export const selectUserProfile = (state) => state.userData.profile;

export const selectUserName = createSelector(
  selectUserProfile,
  (profile) => profile.userName
);

export const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userData: userSlice.reducer,
  },
});
