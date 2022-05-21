import axios from "axios";
import { watchlateraction } from "./watchlater-slice";
import { toast } from "react-toastify";
const removewatchlaterVideoAction = (video, encodedToken) => {
  return async (dispatch) => {
    try {
      dispatch(watchlateraction.setLoading(true));

      const {
        data: { watchlater },
      } = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch(watchlateraction.setRemoveFromWatchLaterVideo(watchlater));

      toast.success("remove from watchlater!");
      dispatch(watchlateraction.setLoading(false));
    } catch (error) {
      dispatch(watchlateraction.setError("something went wrong"));
      dispatch(watchlateraction.setLoading(false));
      toast.error("!something wrong happened");
    }
  };
};
export { removewatchlaterVideoAction };
