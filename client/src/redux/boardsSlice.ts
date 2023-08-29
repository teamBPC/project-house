import { createSlice } from "@reduxjs/toolkit";

const boardsSlice = createSlice({
  name: "boardsSlice",
  initialState: {
    boards: [
      {
        title: "retnsrtm",
        id: 0,
        todos: [
          { text: "trthrth", id: 0 },
          { text: "wttaethsrtnsrth34uh", id: 1 },
          { text: "dfdfndfndfn", id: 2 },
          { text: "ituituiktui", id: 3 },
          { text: "utdymtymty,", id: 4 },
          { text: "34yq35hw4tnjjetynj", id: 5 },
          { text: "tymeymymtymtym", id: 6 },
          { text: "ytmtymtm", id: 7 },
          { text: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", id: 8 },
          { text: "tymtymstym", id: 9 },
          { text: "stymgmgm", id: 10 },
          { text: "fyulyujrtjzr", id: 11 },
          { text: "wrwsgzergh", id: 12 },
          { text: "stymwy6mw5mntsh", id: 13 },
          { text: "srtnsrtj45hrtnh", id: 14 },
          { text: "rmtsymtm", id: 15 },
          { text: "mstymstym", id: 16 },
          { text: "sr5t4tnstym", id: 17 },
          { text: "srtw4msty", id: 18 },
          { text: "gfmfgmf", id: 19 },
          { text: "45hq4thsrt", id: 20 },
          { text: "56styjmsm", id: 21 },
          { text: "fgndgn", id: 22 },
          { text: "4h34hhhhhhhhhhhhhhhhhhhhhhhhh4h4h", id: 23 },
          { text: "mzfgmxghm", id: 24 },
          { text: "wertyhhr", id: 25 },
          { text: "weethrty3t45ytuyth", id: 26 },
        ],
      },
      {
        title: "rtnrtnrt",
        id: 1,
        todos: [],
      },
      {
        title: "stymstym",
        id: 2,
        todos: [
          { text: "rstnmstmht", id: 27 },
          { text: "gmxthmghmcghm", id: 28 },
        ],
      },      {
        title: "ymtykmtyj",
        id: 3,
        todos: [
          { text: "ergegxrgxth", id: 29 },
          { text: "w2hsrthdtynghm,,t,ytrt", id: 30 },
        ],
      },      {
        title: "끝",
        id: 4,
        todos: [
          { text: "35hw45thrtjstrj", id: 31 },
          { text: "earthsrtnstmtymtymt", id: 32 },
        ],
      },      {
        title: "RTHSRHrtyd",
        id: 5,
        todos: [
          { text: "RTRSTMTYM", id: 33 },
          { text: "fgmfmtmtymtymtymtym", id: 34 },
        ],
      },      {
        title: "ztngm",
        id: 6,
        todos: [
          { text: "mxfgmnxgmxhm", id: 35 },
          { text: "tttttttttttttrtnrtrtmrtm", id: 36 },
        ],
      },      {
        title: "ztnzf",
        id: 7,
        todos: [
          { text: "rnsrtnsrthserhser4ye4", id: 37 },
          { text: "gfgfgmfgmfgm", id: 38 },
        ],
      },      {
        title: "nrmrrtmrtm",
        id: 8,
        todos: [
          { text: "fnfgmfgm", id: 39 },
          { text: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", id: 40 },
        ],
      },      {
        title: "tmrtmrtmtm",
        id: 9,
        todos: [
          { text: "dtymdtymtym", id: 41 },
          { text: "dtymdtyke56tymndtm", id: 42 },
        ],
      },
    ],
  },
  reducers: {
    boardsRedux: (state, action) => {
      console.log(state);
      state.boards = action.payload;
    },
  },
});
export default boardsSlice;
export const { boardsRedux } = boardsSlice.actions;
