import { toast } from "react-toastify";
import { loginActions } from "./login-slice";
const logoutUser = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(loginActions.logOutUser());

    toast.success("logout successfull!");
  };
};
export { logoutUser };
