import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "../../customHooks/useDebounce";
import { HorizontalVideoCard } from "../HorizontalVideoCard/HorizontalVideoCard";
import styles from "../Like/LikedVideos.module.css";
import { removewatchlaterVideoAction } from "../../store/WatchLater/removewatchlater-action";
const WatchLater = () => {
  const watchlatervideo = useSelector(
    (state) => state.watchlater.watchlatervideo
  );
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const dispatch = useDispatch();
  const deleteVideo = (video) =>
    dispatch(removewatchlaterVideoAction(video, encodedToken));
  const deleteVideodebounce = useDebounce(deleteVideo, 300);
  return (
    <main className={`${styles.horizonatal_video_container}`}>
      {watchlatervideo.map((video) => (
        <HorizontalVideoCard
          key={video._id}
          video={video}
          deleteVideo={deleteVideodebounce}
        />
      ))}
    </main>
  );
};

export { WatchLater };
