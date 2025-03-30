import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NavbarState {
  isOpen: boolean;
  currentNavBar: number;
}

const initialState: NavbarState = {
  isOpen: false,
  currentNavBar: 0,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    openNavBar: (state) => {
      state.isOpen = true;
    },
    closeNavBar: (state) => {
      state.isOpen = false;
    },
    setCurrentNavbar: (state, action: PayloadAction<number>) => {
      state.currentNavBar = action.payload;
    },
  },
});

export const { openNavBar, setCurrentNavbar, closeNavBar } =
  navbarSlice.actions;
export const selectCurrentNavBar = (state: RootState) =>
  state.navbar.currentNavBar;
export const selectNavBarOpen = (state: RootState) => state.navbar.isOpen;

export default navbarSlice.reducer;
