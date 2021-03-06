import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  filteredVideo: [],
  filterByCategory: "All",
  filterBySearchResult: "",
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
    setSearchFilter: (state, action) => {
      state.filterBySearchResult = action.payload;
    },
    setResetSearchFilter: (state, action) => {
      state.filterBySearchResult = "";
    },
    logOutUser: (state, action) => {
      return initialState;
    },
  },
});
const filterAction = filterSlice.actions;
export { filterAction };
export default filterSlice;
