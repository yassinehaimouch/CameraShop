import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    amount: 0,
  },
  reducers: {
    add: (state, action) => {
      state.amount++;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1, totalItem: action.payload.price });
    },
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount += 1;
      state.cartItems[itemIndex].totalItem = state.cartItems[itemIndex].amount * state.cartItems[itemIndex].price;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if(state.cartItems[itemIndex].totalItem > 1){
        state.cartItems[itemIndex].totalItem -= state.cartItems[itemIndex].price;
      }
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount--;
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {return item.id !== action.payload.id});
      state.amount -= action.payload.amount;
    },
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  }
});

export const { add, increase, decrease, remove, total, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
