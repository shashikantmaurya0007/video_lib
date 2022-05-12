import { filterAction } from "./filtervideo-slice";
const fetchFilteredVideo = (videos, filterByCategory) => {
  return async (dispatch) => {
    dispatch(filterAction.setLoadingState(true));
    console.log("hello");
    try {
      console.log("ssfsd");
      if (filterByCategory !== "All") {
        const filteredData = videos?.filter(
          (video) => video.category === filterByCategory
        );
        dispatch(filterAction.setFilterVideos(filteredData));
      } else {
        console.log("hello");
        dispatch(filterAction.setFilterVideos(videos));
        console.log("hello");
        console.log(videos, "checking");
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
