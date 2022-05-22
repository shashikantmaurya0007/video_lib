import axios from "axios";
import { playlistaction } from "./playlistmodel-slice";

const createPlaylist = (title, encodedToken) => {
  return async (dispatch) => {
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",

      {
        playlist: { title },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );

    dispatch(playlistaction.setPlayList(playlists));
  };
};

export { createPlaylist };
