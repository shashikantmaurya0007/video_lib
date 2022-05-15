import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Explore/filtervideo-slice";
import videoListSlice from "./Explore/videolisting-slice";
import signupSlice from "./Signup/signup-slice";

const store = configureStore({
  reducer: {
    videoList: videoListSlice.reducer,
    filter: filterSlice.reducer,
    signup: signupSlice.reducer,
  },
});

export { store };
