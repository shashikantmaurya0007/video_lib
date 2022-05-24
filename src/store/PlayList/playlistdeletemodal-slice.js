import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPlayListDeleteModal: false,

  playListDeleteId: null,
};

const playlistDeleteSlice = createSlice({
  name: "playlistDelete",
  initialState,

  reducers: {
    setShowPlayListDeleteModal: (state, action) => {
      state.showPlayListDeleteModal = action.payload;
    },

    setPlayListDeleteId: (state, action) => {
      state.playListDeleteId = action.payload;
    },
  },
});

const playListDelteAction = playlistDeleteSlice.actions;

export { playListDelteAction };
export default playlistDeleteSlice;
