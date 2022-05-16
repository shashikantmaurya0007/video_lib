import axios from "axios";
import { loginActions } from "./login-slice";
import { toast } from "react-toastify";
const loginTestUser = () => {
  return async (dispatch) => {
    console.log("called");
    try {
      dispatch(loginActions.setLoadingState(true));
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        firstName: "test",
        lastName: "user",
        email: "test@gmail.com",
        password: "123456",
      });
      dispatch(loginActions.setError(null));
      dispatch(loginActions.setLoginStatus(true));
      dispatch(loginActions.setUserInformation(foundUser));
      dispatch(loginActions.setEncodedToken(encodedToken));
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("userInformation", JSON.stringify(foundUser));
      dispatch(loginActions.setLoadingState(false));
      toast.success("login Succesfull");
    } catch (error) {
      dispatch(loginActions.setError("Invalid credential!"));
      dispatch(loginActions.setEncodedToken(null));
      dispatch(loginActions.setLoadingState(false));
      dispatch(loginActions.setLoginStatus(false));
      dispatch(loginActions.setUserInformation(null));
      localStorage.setItem("encodedToken", null);
      localStorage.setItem("userInformation", null);
      toast.error("Invalid credential!");
    }
  };
};

export { loginTestUser };
