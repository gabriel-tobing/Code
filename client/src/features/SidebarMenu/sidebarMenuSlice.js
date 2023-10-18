import { createSlice } from "@reduxjs/toolkit";

const sidebarMenuSlice = createSlice({
  name: "sidebarMenu",
  initialState: { isSidebarOpen: false },
  reducers: {
    openSidebarMenu: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebarMenu: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebarMenu, closeSidebarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
