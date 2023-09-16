import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../interface/modal";

const modalOpenSlice = createSlice({
  name: "modalOpenSlice",
  initialState: {
    modalOpen: {
      createTaskModalOpen: false,
      createBoardItemModalOpen: false,
      deleteBoardItemModalOpen: false,
      createBoardsModalOpen: false,
      editBoardsModalOpen: false,
      deleteBoardsModalOpen: false,
      editProfileModalOpen: false,
      createProjectModalOpen: false,
    },
  },
  reducers: {
    modalRedux: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});
export default modalOpenSlice;
export const { modalRedux } = modalOpenSlice.actions;
