import { createSlice, createAction } from "@reduxjs/toolkit";
import { configureStore, createSelector } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProfile,
  changeAccount,
  getAccounts,
  getTransactions,
} from "./apiCalls";

const Token =
  localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

export const saveUserProfile = createAction("user/saveUserProfile");

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    try {
      const response = await getProfile();
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
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchGetAccounts = createAsyncThunk(
  "accounts/fetchGetAccounts",
  async (userId) => {
    if (userId) {
      try {
        const response = await getAccounts(userId);

        return response;
      } catch (error) {
        console.error(error, "error in redux's get accounts");
        throw error;
      }
    }
  }
);

export const setSelectAccount = createAction("accounts/setSelectAccount");

export const fetchGetTransactions = createAsyncThunk(
  "transactions/fetchGetTransaction",
  async (accountId) => {
    if (accountId) {
      try {
        const response = await getTransactions(accountId);
        return response;
      } catch (error) {
        console.error(error, "error in redux's get transactions");
        throw error;
      }
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
    isOpen: true,
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

export const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAccounts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetAccounts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accounts = action.payload;
      })
      .addCase(fetchGetAccounts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectedAccountSlice = createSlice({
  name: "selectedAccount",
  initialState: null,
  reducers: {
    setSelectedAccount: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedAccount } = selectedAccountSlice.actions;
export default selectedAccountSlice.reducer;

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchGetTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
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
    accounts: accountSlice.reducer,
    selectedAccount: selectedAccountSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
});
