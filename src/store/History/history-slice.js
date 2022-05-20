import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  loading: false,
  historyvideos: [],
  error: null,
};

const historySlice = createSlice({
  name: "history",
  initialState: { loading: false, historyvideos: [], error: null },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAddHistoryVideos: (state, action) => {
      state.historyvideos = action.payload;
    },
    setDeleteHistoryVideos: (state, action) => {
      state.historyvideos = action.payload;
    },
    setClearHistory: (state, action) => {
      state.historyvideos = [];
    },
    logout: (state, action) => {
      return initalState;
    },
  },
});

const historyAction = historySlice.actions;
export { historyAction };
export default historySlice;
