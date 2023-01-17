import { configureStore } from "@reduxjs/toolkit";
import NavBarSlice from "./Slices/NavBarSlice";
import CartSlice from "./Slices/Cart-Slice";

const store = configureStore({
  reducer:{
    navReducer: NavBarSlice,
    cartReducer: CartSlice
  }
});

export default store;