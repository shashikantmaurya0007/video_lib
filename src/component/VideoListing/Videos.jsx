import React from "react";

import { useSelector } from "react-redux";
import { useFilteredVideo } from "./VideoListingHook/useFilteredVideo";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Videos.module.css";

const Videos = () => {
  //   const { loading, error, videos } = useSelector((state) => state.videoList);
  const { loading, filteredVideo, error } = useFilteredVideo();
  // console.log(loading, filteredVideo, error, "check here");

  const videos = useSelector((state) => state.videoList.videos);
  console.log(videos);
  return (
    <div>
      <div> {loading && <h1>Loading...</h1>}</div>
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
