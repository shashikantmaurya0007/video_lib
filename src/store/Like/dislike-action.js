import axios from "axios";
import { likeaction } from "./like-slice";
import { toast } from "react-toastify";
const dislikeVideoAction = (video, encodedToken) => {
  return async (dispatch) => {
    try {
      dispatch(likeaction.setLoading(true));
      const {
        data: { likes },
      } = await axios.delete(`/api/user/likes/${video._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch(likeaction.setRemoveFromLikeVideo(likes));
      toast.success("removed liked videos!");
      dispatch(likeaction.setLoading(true));
    } catch (error) {
      dispatch(likeaction.setError("something went wrong"));
      dispatch(likeaction.setLoading(false));
      toast.error("!something wrong happened");
    }
  };
};
export { dislikeVideoAction };
