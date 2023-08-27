import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentails: (state, action) => {
      state.userInfo = action.payload;
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("isSubMenuVisible");
    },
  },
});

export const { setCredentails, logout } = authSlice.actions;
export default authSlice.reducer;
