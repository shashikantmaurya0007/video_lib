import axios from "axios";
import { watchlateraction } from "./watchlater-slice";
import { toast } from "react-toastify";
const watchlaterVideoAction = (video, encodedToken) => {
  return async (dispatch) => {
    try {
      dispatch(watchlateraction.setLoading(true));
      const {
        data: { watchlater },
      } = await axios.post(
        "/api/user/watchlater",
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(watchlater, "watchlater");
      dispatch(watchlateraction.setAddToWatchLaterVideo(watchlater));

      toast.success("added to watchlater!");
      dispatch(watchlateraction.setLoading(false));
    } catch (error) {
      dispatch(watchlateraction.setError("something went wrong"));
      dispatch(watchlateraction.setLoading(false));
      toast.error("!something wrong happened");
    }
  };
};
export { watchlaterVideoAction };
