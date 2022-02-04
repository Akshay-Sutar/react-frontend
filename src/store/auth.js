import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  loggedinUser: {
    username: null,
    userId: null,
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.loggedinUser = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.loggedinUser = { ...initialState.loggedinUser };
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
