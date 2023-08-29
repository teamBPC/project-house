import { createSlice } from "@reduxjs/toolkit";

const viewWidthSlice = createSlice({
    name: "viewWidthSlice",
    initialState: 0,
    reducers: {
      width: (_, action) => action.payload,
    },
  });
export default viewWidthSlice;
export const { width } = viewWidthSlice.actions;
