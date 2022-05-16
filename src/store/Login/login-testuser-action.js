import axios from "axios";
import { loginActions } from "./login-slice";
const loginTestUser = () => {
  return async (dispatch) => {
    console.log("called");
    try {
      dispatch(loginActions.setLoadingState(true));
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios.post("/api/auth/login", {
        firstName: "test",
        lastName: "user",
        email: "test@gmail.com",
        password: "123456",
      });
      console.log(foundUser, encodedToken, status);
      dispatch(loginActions.setLoginStatus(true));
      dispatch(loginActions.setUserInformation(foundUser));
      dispatch(loginActions.setEncodedToken(encodedToken));
      localStorage.setItem("encodedToken", encodedToken);
      dispatch(loginActions.setLoadingState(false));
    } catch (error) {
      dispatch(loginActions.setError("try after someTime"));
      dispatch(loginActions.setLoadingState(false));
      dispatch(loginActions.setLoginStatus(false));
      localStorage.setItem("encodedToken", null);
    }
  };
};

export { loginTestUser };
