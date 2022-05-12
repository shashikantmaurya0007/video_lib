import React from "react";

import { useSelector } from "react-redux";
import { useFilteredVideo } from "./VideoListingHook/useFilteredVideo";

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
      <div>
        {!loading &&
          !error &&
          filteredVideo?.map((ele) => <h1>{ele.title}</h1>)}
      </div>
    </div>
  );
};

export { Videos };
