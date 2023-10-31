import { createSlice } from "@reduxjs/toolkit";

const boardCollectionSlice = createSlice({
  name: "boardCollectionSlice",
  initialState: {
    boardCollection: [
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
    boardCollectionRedux: (state, action) => {
      state.boardCollection = action.payload;
    },
  },
});
export default boardCollectionSlice;
export const { boardCollectionRedux } = boardCollectionSlice.actions;
