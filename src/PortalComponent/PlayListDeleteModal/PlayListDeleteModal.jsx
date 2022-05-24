import React from "react";
import ReactDOM from "react-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import styles from "../modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { playListDelteAction } from "../../store/PlayList/playlistdeletemodal-slice";
import { deletePlayListAction } from "../../store/PlayList/deleteplaylist-action";
const PlayListDeleteModal = () => {
  const dispatch = useDispatch();
  const modalSelected = useSelector(
    (state) => state.playlistDelete.showPlayListDeleteModal
  );
  const playlistId = useSelector(
    (state) => state.playlistDelete.playListDeleteId
  );
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const cancelDeletePlayList = () => {
    dispatch(playListDelteAction.setShowPlayListDeleteModal(false));
  };
  const successfullyDelete = async () => {
    dispatch(deletePlayListAction(playlistId, encodedToken));
    dispatch(playListDelteAction.setShowPlayListDeleteModal(false));
  };
  if (!modalSelected) {
    document.body.style.overflow = "unset";
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }
  return ReactDOM.createPortal(
    <main className={`${styles.modal_background}`}>
      <section className={`${styles.modal_content}`}>
        <header className={`${styles.modal_header}`}>
          <h1>
            Are you sure
            <HelpTwoToneIcon />
          </h1>
          <button onClick={cancelDeletePlayList}>
            <CancelTwoToneIcon />
          </button>
        </header>
        <section className={`  ${styles.modal_content_desc}`}>
          you will loose all your video of this playlist_modal_content_desc..
        </section>
        <footer className={`${styles.modal_action_btn_con}`}>
          <div className={`${styles.modal_action_btn}`}>
            <button
              onClick={cancelDeletePlayList}
              className="modal_primary_btn"
            >
              cancel
            </button>
            <button
              onClick={successfullyDelete}
              className="modal_secondary_btn"
            >
              delete
            </button>
          </div>
        </footer>
      </section>
      )
    </main>,
    document.getElementById("playlistdeletemodal")
  );
};

export default PlayListDeleteModal;
