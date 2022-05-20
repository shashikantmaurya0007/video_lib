import { toast } from "react-toastify";
import { likeaction } from "../Like/like-slice";
import { loginActions } from "./login-slice";
const logoutUser = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(loginActions.logOutUser());
    dispatch(likeaction.logout());

    toast.success("logout successfull!");
  };
};
export { logoutUser };
