import axios from "axios";
import { sliceAction } from "./signup-slice";
import { toast } from "react-toastify";
const userSignup = (userInformation) => {
  return async (dispatch) => {
    dispatch(sliceAction.setLoadingState(true));
    const signUpTheUser = async () => {
      const { data, status } = await axios.post(
        "/api/auth/signup",
        userInformation
      );
      console.log(status);
      // if (status === "422") throw new Error("user Already Registered!");
      toast.success("signup successfull!");
      setTimeout(() => dispatch(sliceAction.setLoadingState(false)), 3000);
    };
    // try {
    //   dispatch(sliceAction.setLoadingState(true));

    //   const { data, status } = await axios.post(
    //     "/api/auth/signup",

    //     userInformation
    //   );
    //   toast.success("signup successfull!");
    //   setTimeout(() => dispatch(sliceAction.setLoadingState(false)), 1000);
    // }
    try {
      await signUpTheUser();
    } catch (error) {
      console.log("hello");
      dispatch(sliceAction.setError("user already regiestered!"));
      dispatch(toast.error("email already registered!"));
      await setTimeout(
        () => dispatch(sliceAction.setLoadingState(false)),
        1000
      );
    }
  };
};

export { userSignup };
