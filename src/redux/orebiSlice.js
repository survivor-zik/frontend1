import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  role: "",
  access_token: "",
  name: "",
  email: "",
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    setToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.role = action.payload.role;
      localStorage.setItem("token", state.access_token);
      localStorage.setItem("role", state.role);
      console.log("redux", state.access_token);
    },
    setUserData: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.full_name;
      console.log("user data", state.name, state.email);
    },
    resetData: (state) => {
      state.access_token = "";
      state.userEmail = "";
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  setToken,
  setUserData,
  resetData,
} = orebiSlice.actions;
export default orebiSlice.reducer;
