import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredVideo } from "../../../store/Explore/filterVideoAction";

const useFilteredVideo = () => {
  const dispatch = useDispatch();

  const { filterByCategory, filterBySearchResult } = useSelector(
    (state) => state.filter
  );

  const { loading, filteredVideo, error } = useSelector(
    (state) => state.filter
  );

  const videos = useSelector((state) => state.videoList.videos);

  useEffect(() => {
    dispatch(
      fetchFilteredVideo(videos, filterByCategory, filterBySearchResult)
    );
  }, [filterByCategory, videos, dispatch, filterBySearchResult]);

  return { loading, filteredVideo, error };
};

export { useFilteredVideo };
