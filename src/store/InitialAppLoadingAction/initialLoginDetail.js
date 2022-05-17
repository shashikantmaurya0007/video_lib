import { loginActions } from "../Login/login-slice";
const initialLoginDetails = () => {
  return async (dispatch) => {
    if (localStorage.getItem("encodedToken")) {
      dispatch(loginActions.setLoginStatus(true));
      dispatch(
        loginActions.setUserInformation(
          JSON.parse(localStorage.getItem("userInformation"))
        )
      );
      dispatch(loginActions.setLoginStatus(true));
      dispatch(
        loginActions.setEncodedToken(localStorage.getItem("encodedToken"))
      );
    }
  };
};

export { initialLoginDetails };
