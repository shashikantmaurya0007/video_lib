import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  filteredVideo: [],
  filterByCategory: "All",
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterByCategory = action.payload;
    },
    setFilterVideos: (state, action) => {
      state.filteredVideo = action.payload;
    },
  },
});
const filterAction = filterSlice.actions;
export { filterAction };
export default filterSlice;
