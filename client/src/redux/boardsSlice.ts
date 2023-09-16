import { createSlice } from "@reduxjs/toolkit";

const boardsSlice = createSlice({
  name: "boardsSlice",
  initialState: {
    boards: [
      {
        id: 0,
        title: "프론트엔드",
        description: "프론트 관련 보드뮫ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㅅ귯ㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅㅅ",
        
      },
      {
        id: 1,
        title: "백엔드",
        description: "백 관련 보드",
      },
      {
        id: 2,
        title: "기획",
        description: "기획 관련 보드",
      },
      {
        id: 3,
        title: "기획",
        description: "기획 관련 보드",
      },
      {
        id: 4,
        title: "기획",
        description: "기획 관련 보드",
      },
      {
        id: 5,
        title: "기획엔드프론트백엔드엔드",
        description: "기획 관련 보드",
      },
      {
        id: 6,
        title: "기획엔드",
        description: "기획 관련 보드",
      },
    ],
  },
  reducers: {
    boardsRedux: (state, action) => {
      state.boards = action.payload;
    },
  },
});
export default boardsSlice;
export const { boardsRedux } = boardsSlice.actions;
