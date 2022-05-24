import axios from "axios";
import { toast } from "react-toastify";
import { playlistaction } from "./playlistmodel-slice";

const addVideoToPlayList = (playlistId, video, encodedToken) => {
  return async (dispatch) => {
    dispatch(playlistaction.setPLaylistLoading(true));
    try {
      const {
        data: { playlists },
      } = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        { headers: { authorization: encodedToken } }
      );
      dispatch(playlistaction.setPlayList(playlists));
      dispatch(playlistaction.setPLaylistLoading(false));
      dispatch(playlistaction.setPlaylistError(null));
      toast.success("video added to playlist!");
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
export { addVideoToPlayList };
