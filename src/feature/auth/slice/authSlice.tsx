import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type InitialState = {
  isLoggedIn: boolean;
};

const initialState: InitialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === "flyerssoft@gmail.com" && password === "Flyers@123") {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectLoggedInStatus = (state: RootState) => state.auth.isLoggedIn;
