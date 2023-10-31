import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardSlice from "./boardSlice";
import boardCollectionSlice from "./boardCollectionSlice";
import modalStateSlice from "./modalStateSlice";
import projectCollectionSlice from "./projectCollectionSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardSlice: boardSlice.reducer,
    boardCollectionSlice: boardCollectionSlice.reducer,
    projectCollectionSlice: projectCollectionSlice.reducer,
    modalStateSlice: modalStateSlice.reducer,
  },
});
export default store;
