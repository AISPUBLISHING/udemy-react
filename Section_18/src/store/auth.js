import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticted: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticted = true;
    },
    logout(state) {
      state.isAuthenticted = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
