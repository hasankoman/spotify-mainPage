import { createSlice } from "@reduxjs/toolkit";

export const playbackSlice = createSlice({
  name: "playback",
  initialState: {
    isLiked: false,
    isShuffle: false,
    isRepeat: 0,
    isLyricsActive: false,
    isQueueActive: false,
    isConnectActive: false,
  },
  reducers: {
    setIsLiked: (state) => {
      state.isLiked = !state.isLiked;
    },
    setIsShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
    setIsRepeat: (state, action) => {
      state.isRepeat = action.payload;
    },
    setIsLyricsActive: (state) => {
      state.isLyricsActive = !state.isLyricsActive;
    },
    setIsQueueActive: (state) => {
      state.isQueueActive = !state.isQueueActive;
    },
    setIsConnectActive: (state, action) => {
      state.isConnectActive = !state.isConnectActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsConnectActive,
  setIsLiked,
  setIsLyricsActive,
  setIsQueueActive,
  setIsRepeat,
  setIsShuffle,
  setPlaybackPosition,
  setTranslatePlaybackPx,
} = playbackSlice.actions;

export default playbackSlice.reducer;
