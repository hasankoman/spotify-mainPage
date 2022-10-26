import { createSlice } from "@reduxjs/toolkit";

export const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    volume: 0,
    memorizedVolume: 0,
    translateVolumePx: 0,
    memorizedTranslateVolumePx: 0,
  },
  reducers: {
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setMemorizedVolume: (state, action) => {
      state.memorizedVolume = action.payload;
    },
    setTranslateVolumePx: (state, action) => {
      state.translateVolumePx = action.payload;
    },
    setMemorizedTranslateVolumePx: (state, action) => {
      state.memorizedTranslateVolumePx = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setVolume,
  setMemorizedVolume,
  setTranslateVolumePx,
  setMemorizedTranslateVolumePx,
} = volumeSlice.actions;

export default volumeSlice.reducer;
