import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardSlice from "./boardSlice";
import boardsSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardSlice: boardSlice.reducer,
    boardsSlice: boardsSlice.reducer,
  },
});
export default store;
