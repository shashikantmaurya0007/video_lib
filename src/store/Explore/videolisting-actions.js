import axios from "axios";
import { videoListActions } from "./videolisting-slice";

export const fetchVideos = () => {
  return async (dispatch) => {
    dispatch(videoListActions.setLoadingState(true));
    const fetchData = async () => {
      const { data, status } = await axios.get(`/api/videos`);

      if (status !== 200) {
        throw new Error("some error occured");
      }

      return data;
    };

    try {
      const { videos } = await fetchData();
      dispatch(videoListActions.setVideos(videos));
      dispatch(videoListActions.setLoadingState(false));
    } catch (error) {
      dispatch(videoListActions.error("Fetching video Failed"));
    }
  };
};
