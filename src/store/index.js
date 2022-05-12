import { configureStore } from "@reduxjs/toolkit";
import videoListSlice from "./videolisting/videolisting-slice";

const store = configureStore({
  reducer: { videoList: videoListSlice.reducer },
});

export { store };
