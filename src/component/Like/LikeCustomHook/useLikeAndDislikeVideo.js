import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useDebounce } from "../../../customHooks/useDebounce";
import { dislikeVideoAction } from "../../../store/Like/dislike-action";
import { likeVideoAction } from "../../../store/Like/like-action";

const useLikeAndDislikeVideo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const likedvideo = useSelector((state) => state.like.likedvideo);
  const encodedToken = useSelector((state) => state.login.encodedToken);

  const likeAndDislike = (video) => {
    if (!isLogin) {
      navigate("/auth", { state: { from: location } });
    } else {
      const find = likedvideo.some((ele) => ele._id === video._id);

      if (find) {
        dispatch(dislikeVideoAction(video, encodedToken));
      } else {
        dispatch(likeVideoAction(video, encodedToken));
      }
    }
  };

  const debounceLikeFn = useDebounce(likeAndDislike, 400);

  return debounceLikeFn;
};

export { useLikeAndDislikeVideo };
