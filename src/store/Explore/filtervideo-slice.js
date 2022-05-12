import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  filteredVideo: [],
  filterByCategory: "dsa",
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setEror: (state, action) => {
      state.error = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterByCategroy = action.payload;
    },
    setFilterVideos: (state, action) => {
      state.filteredVideo = action.payload;
    },
  },
});
const filterAction = filterSlice.actions;
export { filterAction };
export default filterSlice;
