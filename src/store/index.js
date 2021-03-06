import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Explore/filtervideo-slice";
import videoListSlice from "./Explore/videolisting-slice";
import signupSlice from "./Signup/signup-slice";
import loginSlice from "./Login/login-slice";
import modalSlice from "./Modal/modal-slice";
import likeSlice from "./Like/like-slice";
import historySlice from "./History/history-slice";
import watchlaterSlice from "./WatchLater/watchlater-slice";
import playlistSlice from "./PlayList/playlistmodel-slice";
import playlistDeleteSlice from "./PlayList/playlistdeletemodal-slice";

const store = configureStore({
  reducer: {
    videoList: videoListSlice.reducer,
    filter: filterSlice.reducer,
    signup: signupSlice.reducer,
    login: loginSlice.reducer,
    modal: modalSlice.reducer,
    like: likeSlice.reducer,
    history: historySlice.reducer,
    watchlater: watchlaterSlice.reducer,
    playlist: playlistSlice.reducer,
    playlistDelete: playlistDeleteSlice.reducer,
  },
});

export { store };
