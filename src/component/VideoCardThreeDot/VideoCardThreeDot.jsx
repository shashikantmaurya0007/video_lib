import React from "react";
import styles from "./VideoCardThreeDot.module.css";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import QueueTwoToneIcon from "@mui/icons-material/QueueTwoTone";
import { useLikeAndDislikeVideo } from "../Like/LikeCustomHook/useLikeAndDislikeVideo";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useIsThisVideoLiked } from "../SingleVideo/SingleVideoCustomHooks/useIsThisVideoLiked";
import { useWatchLaterAndRemove } from "../WatchLater/WatchLaterCustomHook/useWatchLaterAndRemove";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useIsThisVideoInWatchLater } from "../SingleVideo/SingleVideoCustomHooks/useIsThisvideoInWatchLater";
import { useOpenPlayListModal } from "../Playlist/PlayListCustomHook/useOpenPlayListModal";

const VideoCardThreeDot = ({ showThreeDots, video }) => {
  const debounceLikeFn = useLikeAndDislikeVideo();
  const isThisVideoLiked = useIsThisVideoLiked();
  const ifLiked = isThisVideoLiked(video);
  const debounceWatchLater = useWatchLaterAndRemove();
  const isThisVideoInWatchLater = useIsThisVideoInWatchLater();
  const ifInWatchLater = isThisVideoInWatchLater(video);
  const openPlayListDebounce = useOpenPlayListModal();

  return (
    <div
      className={`${styles.threedot_base} ${
        showThreeDots ? styles.show_three_dot : styles.dont_show_three_dot
      }`}
    >
      <div className={`${styles.threedot_btn_con}`}>
        <button onClick={() => debounceLikeFn(video)}>
          {ifLiked ? <ThumbUpIcon /> : <ThumbUpTwoToneIcon />}
        </button>
        <button onClick={() => debounceWatchLater(video)}>
          {ifInWatchLater ? <WatchLaterIcon /> : <WatchLaterTwoToneIcon />}
        </button>
        <button onClick={() => openPlayListDebounce(video)}>
          <QueueTwoToneIcon />
        </button>
      </div>
    </div>
  );
};

export default React.memo(VideoCardThreeDot);
