import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeVideoAction } from "../../store/Like/dislike-action";
import { HorizontalVideoCard } from "../HorizontalVideoCard/HorizontalVideoCard";
import { useDebounce } from "../../customHooks/useDebounce";
import styles from "./LikedVideos.module.css";

const LikedVideos = () => {
  const likedvideo = useSelector((state) => state.like.likedvideo);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const dispatch = useDispatch();
  const deleteVideo = (video) =>
    dispatch(dislikeVideoAction(video, encodedToken));
  const deleteVideodebounce = useDebounce(deleteVideo, 300);
  return (
    <main className={`${styles.horizonatal_video_container}`}>
      {likedvideo.map((video) => (
        <HorizontalVideoCard
          key={video._id}
          video={video}
          deleteVideo={deleteVideodebounce}
        />
      ))}
    </main>
  );
};

export { LikedVideos };
