import axios from "axios";
import { videoListActions } from "./videolisting-slice";

export const fetchVideos = () => {
  return async (dispatch) => {
    dispatch(videoListActions.setLoadingState(true));
    const fetchData = async () => {
      const { data, status } = await axios.get(`/api/videos`);

      if (status !== 100) {
        throw new Error("some error occured");
      }

      return data;
    };

    try {
      const { videos } = await fetchData();
      dispatch(videoListActions.setVideos(videos));
    } catch (error) {
      console.log(error);
      dispatch(videoListActions.error("Fetching video Failed"));
    }
  };
};
