import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistmodel_loading: false,
  modalSelected: false,
  videoToManagePlaylist: null,
  playlists_: [],
  playlistmodel_error: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPLaylistLoading: (state, action) => {
      state.playlistmodel_loading = action.payload;
    },
    setModalSelected: (state, action) => {
      state.modalSelected = action.payload;
    },
    setVideoToManagePlaylist: (state, action) => {
      state.videoToManagePlaylist = action.payload;
    },
    setPlayList: (state, action) => {
      state.playlists_ = action.payload;
    },
    setPlaylistError: (state, action) => {
      state.playlistmodel_error = action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

const playlistaction = playlistSlice.actions;
export { playlistaction };
export default playlistSlice;
