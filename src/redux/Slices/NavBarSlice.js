import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false
  },
  reducers: {
    isClicked: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
})

export const {isClicked} = NavBarSlice.actions;
export default NavBarSlice.reducer