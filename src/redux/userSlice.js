// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   role: "",
//   access_token: "",
//   name: "",
//   email: "",
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       state.access_token = action.payload.access_token;
//       state.role = action.payload.role;
//       localStorage.setItem("token", state.access_token);
//       localStorage.setItem("role", state.role);
//       console.log("redux", state.access_token);
//     },
//     setUserData: (state, action) => {
//       state.email = action.payload.email;
//       state.name = action.payload.full_name;
//       console.log("user data", state.name, state.email);
//     },
//     resetCart: (state) => {
//       state.access_token = "";
//       state.userEmail = "";
//     },
//   },
// });

// export const { setToken, setUserData, resetCart } = userSlice.actions;
// export default userSlice.reducer;
