import axios from "axios";
import { toast } from "react-toastify";
import { playlistaction } from "./playlistmodel-slice";
const removeVideoFromPlayList = (playlistId, video, encodedToken) => {
  return async (dispatch) => {
    dispatch(playlistaction.setPLaylistLoading(true));
    try {
      const {
        data: { playlists },
      } = await axios.delete(
        `/api/user/playlists/${playlistId}/${video._id}`,

        { headers: { authorization: encodedToken } }
      );
      dispatch(playlistaction.setPlayList(playlists));
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(playlistaction.setPlaylistError(null));
      toast.success("video removed from playlist!");
    } catch (error) {
      toast.failure("!some error occured");
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(
        playlistaction.setPlaylistError(
          "something went wrong in playlist addition!"
        )
      );
    }
  };
};

export { removeVideoFromPlayList };
