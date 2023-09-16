import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardItemSlice from "./boardItemSlice";
import boardsSlice from "./boardsSlice";
import modalOpenSlice from "./modalOpenSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardItemSlice: boardItemSlice.reducer,
    boardsSlice: boardsSlice.reducer,
    modalOpenSlice: modalOpenSlice.reducer,
  },
});
export default store;
