import { configureStore } from "@reduxjs/toolkit";

import sidebarMenuReducer from "../features/SidebarMenu/sidebarMenuSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarMenuReducer,
  },
});

export default store;
