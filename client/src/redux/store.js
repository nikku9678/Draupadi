import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user:null,
  
  },
  reducers: {
    login(state,actions) {
      state.isLogin = true;
      state.user=actions.payload;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});