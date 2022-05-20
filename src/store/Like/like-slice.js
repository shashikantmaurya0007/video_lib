import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like_loading: false,
  likedvideo: [],
  like_error: null,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.like_loading = action.payload;
    },
    setError: (state, action) => {
      state.like_error = action.payload;
    },
    setAddToLikeVideo: (state, action) => {
      state.likedvideo = action.payload;
    },
    setRemoveFromLikeVideo: (state, action) => {
      state.likedvideo = action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

const likeaction = likeSlice.actions;

export { likeaction };
export default likeSlice;
