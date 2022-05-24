import axios from "axios";
import { toast } from "react-toastify";
import { playlistaction } from "./playlistmodel-slice";

const createPlaylist = (title, encodedToken) => {
  return async (dispatch) => {
    dispatch(playlistaction.setPLaylistLoading(true));
    try {
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
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(playlistaction.setPlaylistError(null));
      dispatch(playlistaction.setPlayList(playlists));
      toast.success(`Playlist ${title} created!`);
    } catch (error) {
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(playlistaction.setPlaylistError("something went wrong!"));
      dispatch(playlistaction.setPlayList([]));
      toast.error(" something went wrong!");
    }
  };
};

export { createPlaylist };
