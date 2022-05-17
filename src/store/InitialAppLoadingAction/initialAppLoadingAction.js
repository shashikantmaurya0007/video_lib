import { initialLoginDetails } from "./initialLoginDetail";
import { fetchVideos } from "../Explore/videolisting-actions";

const initialAppLoadingAction = () => {
  return async (dispatch) => {
    dispatch(initialLoginDetails());
    dispatch(fetchVideos());
  };
};

export { initialAppLoadingAction };
