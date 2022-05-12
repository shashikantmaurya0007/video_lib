import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredVideo } from "../../../store/Explore/filterVideoAction";

const useFilteredVideo = () => {
  const dispatch = useDispatch();

  const filterByCategory = useSelector(
    (state) => state.filter.filterByCategory
  );

  const { loading, filteredVideo, error } = useSelector(
    (state) => state.filter
  );

  const videos = useSelector((state) => state.videoList.videos);

  useEffect(() => {
    console.log(videos);
    dispatch(fetchFilteredVideo(videos, filterByCategory));
  }, [filterByCategory, videos, dispatch]);

  return { loading, filteredVideo, error };
};

export { useFilteredVideo };
