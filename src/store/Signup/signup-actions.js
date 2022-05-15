import axios from "axios";
import { sliceAction } from "./signup-slice";
import { toast } from "react-toastify";
const userSignup = (userInformation) => {
  return async (dispatch) => {
    dispatch(sliceAction.setLoadingState(true));
    const signUpTheUser = async () => {
      const {
        data: { encodedToken },
      } = await axios.post("/api/auth/signup", userInformation);

      toast.success("signup successfull!");
      dispatch(sliceAction.setError(null));
      dispatch(sliceAction.setEncodedToken(encodedToken));
      setTimeout(() => dispatch(sliceAction.setLoadingState(false)), 1600);
    };

    try {
      await signUpTheUser();
    } catch (error) {
      console.log("hello");
      dispatch(sliceAction.setError("user already regiestered!"));
      toast.error("email already registered!");
      dispatch(sliceAction.setEncodedToken(null));
      await setTimeout(
        () => dispatch(sliceAction.setLoadingState(false)),
        1600
      );
    }
  };
};

export { userSignup };
