import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Explore/filtervideo-slice";
import videoListSlice from "./Explore/videolisting-slice";
import signupSlice from "./Signup/signup-slice";
import loginSlice from "./Login/login-slice";
import modalSlice from "./Modal/modal-slice";

const store = configureStore({
  reducer: {
    videoList: videoListSlice.reducer,
    filter: filterSlice.reducer,
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export { store };
