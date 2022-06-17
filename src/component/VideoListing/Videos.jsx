import React from "react";
import { useFilteredVideo } from "./VideoListingHook/useFilteredVideo";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Videos.module.css";
import Loader from "../../GeneralComponent/Loader/Loader";
import { NoSearchResult } from "../../GeneralComponent/NoSearchResult";

const Videos = () => {
  const { loading, filteredVideo, error } = useFilteredVideo();

  const noVideoForSearchResult = !Boolean(filteredVideo?.length);
  return (
    <div>
      <div> {loading && <Loader />}</div>
      <div className={`${styles.video_grid}`}>
        {!loading &&
          !error &&
          filteredVideo?.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
      </div>
      {!loading && !error && noVideoForSearchResult && <NoSearchResult />}
    </div>
  );
};

export { Videos };
