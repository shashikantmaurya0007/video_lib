import { filterAction } from "./filtervideo-slice";
const fetchFilteredVideo = (videos, filterByCategory) => {
  return async (dispatch) => {
    dispatch(filterAction.setLoadingState(true));

    try {
      if (filterByCategory !== "All") {
        const filteredData = videos?.filter(
          (video) => video.category === filterByCategory
        );
        dispatch(filterAction.setFilterVideos(filteredData));
      } else {
        dispatch(filterAction.setFilterVideos(videos));
      }
      setTimeout(() => {
        dispatch(filterAction.setLoadingState(false));
      }, 1600);
    } catch (error) {
      dispatch(filterAction.setLoadingState(false));
      dispatch(filterAction.setError("Error occured While fetching Filter"));
    }
  };
};

export { fetchFilteredVideo };
