import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  encodedToken: null,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setEncodedToken: (state, action) => {
      state.encodedToken = action.payload;
    },
  },
});

const sliceAction = signupSlice.actions;
export { sliceAction };
export default signupSlice;
