import React, { useEffect } from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";

import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import QueueTwoToneIcon from "@mui/icons-material/QueueTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useSingleVideo } from "./SingleVideoCustomHooks/useSingleVideo";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import styles from "./SingleVideo.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../GeneralComponent/Loader/Loader";
import { useLikeAndDislikeVideo } from "../Like/LikeCustomHook/useLikeAndDislikeVideo";
import { useIsThisVideoLiked } from "./SingleVideoCustomHooks/useIsThisVideoLiked";
import { manageHistory } from "../History/historyUtil/manageHistory";
import { useWatchLaterAndRemove } from "../WatchLater/WatchLaterCustomHook/useWatchLaterAndRemove";
import { useIsThisVideoInWatchLater } from "./SingleVideoCustomHooks/useIsThisvideoInWatchLater";
import { useOpenPlayListModal } from "../Playlist/PlayListCustomHook/useOpenPlayListModal";
import { toast } from "react-toastify";
import { useDebounce } from "../../customHooks/useDebounce";
const SingleVideo = () => {
  const { loading, videoDetails, error } = useSingleVideo();
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const historyvideos = useSelector((state) => state.history.historyvideos);
  const debounceLikeFn = useLikeAndDislikeVideo();
  const debounceWatchLater = useWatchLaterAndRemove();
  useEffect(() => {
    videoDetails &&
      manageHistory(videoDetails, isLogin, historyvideos, dispatch);
  }, [videoDetails, isLogin, historyvideos, dispatch]);
  const openPlayListDebounce = useOpenPlayListModal();
  const isThisVideoLiked = useIsThisVideoLiked();
  const ifLiked = isThisVideoLiked(videoDetails);
  const isThisVideoInWatchLater = useIsThisVideoInWatchLater();
  const ifInWatchLater = isThisVideoInWatchLater(videoDetails);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location);
    toast.success(`copied to clipboard!`);
  };
  const copyToClipBoardDebounce = useDebounce(copyToClipBoard, 500);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className={`${styles.singlevideo_con}`}>
          <section className={`${styles.singlevideo_videoplayer}`}>
            <iframe
              src={`https://www.youtube.com/embed/${videoDetails?._id}`}
              title="front end videoplayer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`${styles.singlevideo_iframe}`}
            ></iframe>
          </section>
          <section className={`${styles.single_video_desc}`}>
            <p className={`singlevideo_title `}>{videoDetails?.title}</p>
            <div className={`${styles.singlevideo_avatar_buttons}`}>
              <div
                className={`${styles.single_video_page_avatar_views_dur_con}`}
              >
                <img
                  src={videoDetails?.avatar}
                  className={`avatar medium`}
                  alt="avatar"
                />
                <div className={`${styles.single_video_page_views_dur_con}`}>
                  <p className={`videocard_subtitle `}>
                    {videoDetails?.creator}
                  </p>
                  <div
                    className={`videocard_subtitle ${styles.singlevideo_views_dur} `}
                  >
                    <p className="same_line">
                      <VisibilityTwoToneIcon />
                      {videoDetails?.views}
                    </p>
                    <p className="same_line">
                      <AccessTimeTwoToneIcon />
                      {videoDetails?.duration}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.singlevideo_buttons_con}`}>
                <button
                  onClick={() => debounceLikeFn(videoDetails)}
                  className="same_line"
                >
                  {ifLiked ? <ThumbUpIcon /> : <ThumbUpTwoToneIcon />}
                  {ifLiked ? "Liked" : "Like"}
                </button>
                <button
                  className="same_line"
                  onClick={() => openPlayListDebounce(videoDetails)}
                >
                  <QueueTwoToneIcon />
                  save to playlist
                </button>
                <button
                  onClick={() => {
                    debounceWatchLater(videoDetails);
                  }}
                  className="same_line"
                >
                  {ifInWatchLater ? (
                    <WatchLaterIcon />
                  ) : (
                    <WatchLaterTwoToneIcon />
                  )}
                  {ifInWatchLater ? "remove watch later" : "watch later"}
                </button>
                <button
                  onClick={() => copyToClipBoardDebounce()}
                  className="same_line"
                >
                  <ShareTwoToneIcon />
                </button>
              </div>
            </div>
            <p className={`${styles.single_video_description}`}>
              {videoDetails?.description}
            </p>
          </section>
        </main>
      )}
      {error && <h1>{error}</h1>}
    </>
  );
};

export { SingleVideo };
