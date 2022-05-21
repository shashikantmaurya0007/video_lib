import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlater_loading: false,
  watchlatervideo: [],
  wachlater_error: null,
};

const watchlaterSlice = createSlice({
  name: "watchlater",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.watchlater_loading = action.payload;
    },
    setError: (state, action) => {
      state.watchlater_error = action.payload;
    },
    setAddToWatchLaterVideo: (state, action) => {
      state.watchlatervideo = action.payload;
    },
    setRemoveFromWatchLaterVideo: (state, action) => {
      state.watchlatervideo = action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

const watchlateraction = watchlaterSlice.actions;

export { watchlateraction };
export default watchlaterSlice;
