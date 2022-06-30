import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "../../customHooks/useDebounce";
import { addVideoToPlayList } from "../../store/PlayList/addvideotoplaylist-action";
import { removeVideoFromPlayList } from "../../store/PlayList/removevideofromplaylist-action";
import styles from "./Playlist.module.css";
const IndividualPlayList = ({ playlistId, playlistitle, videos }) => {
  const dispatch = useDispatch();
  const selectedVideo = useSelector(
    (state) => state.playlist.videoToManagePlaylist
  );
  const isVideoInPlaylist = () =>
    videos.some((item) => item?._id === selectedVideo?._id);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const addOrDeleteFromPlayList = () => {
    if (isVideoInPlaylist()) {
      dispatch(
        removeVideoFromPlayList(playlistId, selectedVideo, encodedToken)
      );
    } else {
      dispatch(addVideoToPlayList(playlistId, selectedVideo, encodedToken));
    }
  };
  const addOrDeleteFromPlayListDebounce = useDebounce(
    addOrDeleteFromPlayList,
    300
  );
  return (
    <div className={`${styles.individual_playlist_checkbox}`}>
      <label>
        <input
          checked={isVideoInPlaylist()}
          type="checkbox"
          onChange={(e) => addOrDeleteFromPlayListDebounce()}
        />
        {playlistitle}
      </label>
    </div>
  );
};

export { IndividualPlayList };
