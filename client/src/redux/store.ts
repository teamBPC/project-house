import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardItemSlice from "./boardItemSlice";
import boardsSlice from "./boardsSlice";
import modalStateSlice from "./modalStateSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardItemSlice: boardItemSlice.reducer,
    boardsSlice: boardsSlice.reducer,
    modalStateSlice: modalStateSlice.reducer,
  },
});
export default store;
