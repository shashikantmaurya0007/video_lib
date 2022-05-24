import React from "react";
import AutoDeleteTwoToneIcon from "@mui/icons-material/AutoDeleteTwoTone";
import styles from "./Playlist.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playListDelteAction } from "../../store/PlayList/playlistdeletemodal-slice";
const PlayListCard = ({ title, playlistId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirectToSinglePlayListPage = () =>
    navigate(`/playlist/${playlistId}`);

  const deletePlayList = (e) => {
    e.stopPropagation();

    dispatch(playListDelteAction.setShowPlayListDeleteModal(true));
    dispatch(playListDelteAction.setPlayListDeleteId(playlistId));
  };
  return (
    <main
      onClick={() => redirectToSinglePlayListPage()}
      className={`cursor_pointer ${styles.playlistcard_con}`}
    >
      <p className="text-vs">{title}</p>
      <button onClick={deletePlayList}>
        <AutoDeleteTwoToneIcon />
      </button>
    </main>
  );
};

export { PlayListCard };
