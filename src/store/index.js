import { configureStore } from "@reduxjs/toolkit";
import volumeReducer from "../features/volume";
import playbackReducer from "../features/playback";

export default configureStore({
  reducer: {
    volume: volumeReducer,
    playback: playbackReducer
  },
});
