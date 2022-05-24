import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../../customHooks/useDebounce";
import { playlistaction } from "../../../store/PlayList/playlistmodel-slice";
const useOpenPlayListModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const openPlayListModal = (video) => {
    if (!isLogin) {
      navigate("/auth", { state: { from: location } });
    } else {
      dispatch(playlistaction.setModalSelected(true));
      dispatch(playlistaction.setVideoToManagePlaylist(video));
    }
  };
  const openPlayListDebounce = useDebounce(openPlayListModal, 300);
  return openPlayListDebounce;
};
export { useOpenPlayListModal };
