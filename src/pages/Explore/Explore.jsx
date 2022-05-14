import React from "react";
import { Videos, VideoCategories } from "../../component/index";
// import VideoCategories from "../../component/VideoListing/VideoCategories";

const Explore = () => {
  return (
    <div>
      <VideoCategories />
      <Videos />
    </div>
  );
};

export { Explore };
