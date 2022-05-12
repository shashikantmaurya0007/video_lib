import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  videos: [],
  error: null,
};

const videoListSlice = createSlice({
  name: "videoList",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setEror: (state, action) => {
      state.error = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const videoListActions = videoListSlice.actions;

export default videoListSlice;
