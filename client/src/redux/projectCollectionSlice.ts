import { createSlice } from "@reduxjs/toolkit";

const projectCollectionSlice = createSlice({
  name: "projectCollectionSlice",
  initialState: {
    projectCollection: [
      {
        id: 0,
        title: "코인 거래소",
        description:
          "업비트 처럼 대형 코인 거래소 제작wwewfwefwefwefwefwefwefwefwefwefwefwefwefwefwef",
        participants: ["백시현", "박해찬", "최송윤"],
        updateAt: "1달전",
      },
      {
        id: 1,
        title: "코인 거래소",
        description: "업비트 처럼 대형 코인 거래소 제작",
        participants: ["백시현", "박해찬"],
        updateAt: "1달전",
      },
      {
        id: 3,
        title: "코인 거래소",
        description: "업비트 처럼 대형 코인 거래소 제작",
        participants: [
          "백시현",
          "박해찬",
          "최송윤",
          "백시현",
          "박해찬",
          "최송윤",
          "백시현",
          "박해찬",
          "최송윤",
          "백시현",
          "박해찬",
        ],
        updateAt: "1달전",
      },
      {
        id: 4,
        title: "코인 거래소",
        description: "업비트 처럼 대형 코인 거래소 제작",
        participants: ["백시현", "박해찬", "최송윤"],
        updateAt: "1달전",
      },
    ],
  },
  reducers: {
    projectCollectionRedux: (state, action) => {
      state.projectCollection = action.payload;
    },
  },
});
export default projectCollectionSlice;
export const { projectCollectionRedux } = projectCollectionSlice.actions;
