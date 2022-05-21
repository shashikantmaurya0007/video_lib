import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../../customHooks/useDebounce";
import { removewatchlaterVideoAction } from "../../../store/WatchLater/removewatchlater-action";
import { watchlaterVideoAction } from "../../../store/WatchLater/watchlater-action";

const useWatchLaterAndRemove = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const watchlatervideo = useSelector(
    (state) => state.watchlater.watchlatervideo
  );
  const encodedToken = useSelector((state) => state.login.encodedToken);

  const watchLaterAndRemove = (video) => {
    if (!isLogin) {
      navigate("/auth", { state: { from: location } });
    } else {
      const find = watchlatervideo.some((ele) => ele._id === video._id);

      if (find) {
        dispatch(removewatchlaterVideoAction(video, encodedToken));
      } else {
        dispatch(watchlaterVideoAction(video, encodedToken));
      }
    }
  };

  const debounceWatchLater = useDebounce(watchLaterAndRemove, 400);

  return debounceWatchLater;
};

export { useWatchLaterAndRemove };
