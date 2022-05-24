import axios from "axios";
import { toast } from "react-toastify";
import { playlistaction } from "./playlistmodel-slice";
const deletePlayListAction = (playlistId, encodedToken) => {
  return async (dispatch) => {
    dispatch(playlistaction.setPLaylistLoading(true));
    try {
      const {
        data: { playlists },
      } = await axios.delete(
        `/api/user/playlists/${playlistId}`,

        { headers: { authorization: encodedToken } }
      );
      dispatch(playlistaction.setPlayList(playlists));
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(playlistaction.setPlaylistError(null));
      toast.success("playList deleted succesfully!");
    } catch (error) {
      toast.failure("!some error occured");
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(
        playlistaction.setPlaylistError(
          "something went wrong in playlist delteion!"
        )
      );
    }
  };
};

export { deletePlayListAction };
