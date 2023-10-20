import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../interface/modal";

const modalStateSlice = createSlice({
  name: "modalStateSlice",
  initialState: {
    modalState: {
      createTaskModalOpen: false,
      createBoardItemModalOpen: false,
      deleteBoardItemModalOpen: false,
      createBoardsModalOpen: false,
      editBoardsModalOpen: false,
      deleteBoardsModalOpen: false,
      editProfileModalOpen: false,
      createProjectModalOpen: false,
      taskDetailModalOpen: false,
    },
  },
  reducers: {
    modalRedux: (state, action) => {
      state.modalState = action.payload;
    },
  },
});
export default modalStateSlice;
export const { modalRedux } = modalStateSlice.actions;
