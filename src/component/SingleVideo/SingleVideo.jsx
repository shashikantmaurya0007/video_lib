import React, { useEffect } from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import QueueTwoToneIcon from "@mui/icons-material/QueueTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import { useSingleVideo } from "./SingleVideoCustomHooks/useSingleVideo";
import styles from "./SingleVideo.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../GeneralComponent/Loader/Loader";
import { useLikeAndDislikeVideo } from "../Like/LikeCustomHook/useLikeAndDislikeVideo";
import { useIsThisVideoLiked } from "./SingleVideoCustomHooks/useIsThisVideoLiked";
import { manageHistory } from "../History/historyUtil/manageHistory";
import { useWatchLaterAndRemove } from "../WatchLater/WatchLaterCustomHook/useWatchLaterAndRemove";
import { useIsThisVideoInWatchLater } from "./SingleVideoCustomHooks/useIsThisvideoInWatchLater";
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

  const isThisVideoLiked = useIsThisVideoLiked();
  const ifLiked = isThisVideoLiked(videoDetails);
  const isThisVideoInWatchLater = useIsThisVideoInWatchLater();
  const ifInWatchLater = isThisVideoInWatchLater(videoDetails);
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
                  <ThumbUpTwoToneIcon />
                  {ifLiked ? "Liked" : "Like"}
                </button>
                <button className="same_line">
                  <QueueTwoToneIcon />
                  save to playlist
                </button>
                <button
                  onClick={() => {
                    debounceWatchLater(videoDetails);
                  }}
                  className="same_line"
                >
                  <WatchLaterTwoToneIcon />
                  {ifInWatchLater ? "remove watch later" : "watch later"}
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
