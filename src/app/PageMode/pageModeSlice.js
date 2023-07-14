import { createSlice } from "@reduxjs/toolkit";
import { MODE } from "../constants";

export const pageModeSlice = createSlice({
  name: "pageModeSlice",
  initialState: {
    mode: MODE.ADD,
  },
  reducers: {
    setModeADD: (state) => {
      console.log("setModeADD");
      state.mode = MODE.ADD;
    },
    setModeEDIT: (state) => {
      console.log("setModeEDIT");
      state.mode = MODE.EDIT;
    },
  },
});

export const { setModeADD, setModeEDIT } = pageModeSlice.actions;
export default pageModeSlice.reducer;
