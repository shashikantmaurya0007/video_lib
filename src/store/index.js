import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Explore/filtervideo-slice";
import videoListSlice from "./Explore/videolisting-slice";

const store = configureStore({
  reducer: { videoList: videoListSlice.reducer, filter: filterSlice.reducer },
});

export { store };
