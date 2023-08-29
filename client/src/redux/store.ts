import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardsSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardsSlice: boardsSlice.reducer,
  },
});
export default store;
