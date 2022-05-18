import axios from "axios";
import { likeaction } from "./like-slice";
import { toast } from "react-toastify";
const likeVideoAction = (video, encodedToken) => {
  return async (dispatch) => {
    try {
      dispatch(likeaction.setLoading(true));
      const {
        data: { likes },
      } = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(likeaction.setAddToLikeVideo(likes));
      toast.success("added to liked videos!");
      dispatch(likeaction.setLoading(false));
    } catch (error) {
      dispatch(likeaction.setError("something went wrong"));
      dispatch(likeaction.setLoading(false));
      toast.error("!something wrong happened");
    }
  };
};
export { likeVideoAction };
