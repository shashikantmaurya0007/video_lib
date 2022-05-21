import { toast } from "react-toastify";
import { historyAction } from "../History/history-slice";
import { likeaction } from "../Like/like-slice";
import { watchlateraction } from "../WatchLater/watchlater-slice";
import { loginActions } from "./login-slice";
const logoutUser = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(loginActions.logOutUser());
    dispatch(likeaction.logout());
    dispatch(historyAction.logout());
    dispatch(watchlateraction.logout());
    toast.success("logout successfull!");
  };
};
export { logoutUser };
