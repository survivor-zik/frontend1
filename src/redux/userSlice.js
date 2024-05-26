import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.role = action.payload.role;
      localStorage.setItem("token", state.access_token);
      localStorage.setItem("role", state.role);
    },
    resetCart: (state) => {
      state.access_token = "";
      state.userEmail = "";
    },
  },
});

export const { setToken, resetCart } = userSlice.actions;
export default userSlice.reducer;
