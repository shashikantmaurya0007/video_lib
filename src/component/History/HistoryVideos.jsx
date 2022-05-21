import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyAction } from "../../store/History/history-slice";
import { HorizontalVideoCard } from "../HorizontalVideoCard/HorizontalVideoCard";
import { useDebounce } from "../../customHooks/useDebounce";
import styles from "../Like/LikedVideos.module.css";
import { toast } from "react-toastify";
const HistoryVideos = () => {
  const historyvideos = useSelector((state) => state.history.historyvideos);
  const dispatch = useDispatch();
  console.log(historyvideos, "historyVideos");
  const deleteVideo = (video) => {
    const historyListAfterDeletion = historyvideos?.filter(
      (el) => el?._id !== video?._id
    );
    dispatch(historyAction.setDeleteHistoryVideos(historyListAfterDeletion));
    toast.success("video removed from history");
  };
  const deleteVideodebounce = useDebounce(deleteVideo, 300);
  return (
    <main className={`${styles.horizonatal_video_container}`}>
      {historyvideos?.map((video) => (
        <>
          {console.log(video)}
          <HorizontalVideoCard
            key={video._id}
            video={video}
            deleteVideo={deleteVideodebounce}
          />
        </>
      ))}
    </main>
  );
};

export default HistoryVideos;
