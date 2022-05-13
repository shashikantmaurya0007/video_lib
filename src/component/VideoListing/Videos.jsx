import React from "react";

import { useSelector } from "react-redux";
import { useFilteredVideo } from "./VideoListingHook/useFilteredVideo";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Videos.module.css";
import Loader from "../../GeneralComponent/Loader/Loader";

const Videos = () => {
  const { loading, filteredVideo, error } = useFilteredVideo();

  const videos = useSelector((state) => state.videoList.videos);
  console.log(videos);
  return (
    <div>
      <div> {loading && <Loader />}</div>
      {console.log(loading, "loading")}
      <div className={`${styles.video_grid}`}>
        {!loading &&
          !error &&
          filteredVideo?.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
      </div>
    </div>
  );
};

export { Videos };
