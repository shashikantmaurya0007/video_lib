import { filterAction } from "./filtervideo-slice";
const fetchFilteredVideo = (videos, filterByCategory, filterBySearchResult) => {
  return async (dispatch) => {
    dispatch(filterAction.setLoadingState(true));
    let filteredData = videos;
    try {
      if (filterByCategory !== "All") {
        filteredData = videos?.filter(
          (video) => video.category === filterByCategory
        );
        if (Boolean(filterBySearchResult)) {
          filteredData = filteredData.filter((video) =>
            video.title
              .toLowerCase()
              .includes(filterBySearchResult.toLowerCase())
          );
        }
        dispatch(filterAction.setFilterVideos(filteredData));
      } else {
        if (Boolean(filterBySearchResult)) {
          filteredData = filteredData.filter((video) =>
            video.title
              .toLowerCase()
              .includes(filterBySearchResult.toLowerCase())
          );
        }
        dispatch(filterAction.setFilterVideos(filteredData));
      }
      setTimeout(() => {
        dispatch(filterAction.setLoadingState(false));
      }, 600);
    } catch (error) {
      dispatch(filterAction.setLoadingState(false));
      dispatch(filterAction.setError("Error occured While fetching Filter"));
    }
  };
};

export { fetchFilteredVideo };
