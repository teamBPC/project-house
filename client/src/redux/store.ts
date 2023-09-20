import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
import boardItemSlice from "./boardItemSlice";
import boardsSlice from "./boardsSlice";
import modalStateSlice from "./modalStateSlice";
import projectsSlice from "./projectsSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardItemSlice: boardItemSlice.reducer,
    boardsSlice: boardsSlice.reducer,
    projectsSlice: projectsSlice.reducer,
    modalStateSlice: modalStateSlice.reducer,
  },
});
export default store;
