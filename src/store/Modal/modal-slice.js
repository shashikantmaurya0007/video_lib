import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalSelected: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setSelectedModal: (state, action) => {
      state.modalSelected = action.payload;
    },
    setDefaultModal: (state, action) => {
      state.modalSelected = null;
    },
  },
});

const modalActions = modalSlice.actions;
export { modalActions };
export default modalSlice;
