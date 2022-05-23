import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { playlistaction } from "../../store/PlayList/playlistmodel-slice";
import { PlayListContent } from "./PlayListContent";
const PlayListModal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      console.log("going out");
      document.body.style.overflow = "";
    };
  }, []);
  const dispatch = useDispatch();
  const modalSelected = useSelector((state) => state.playlist.modalSelected);
  const closeModalSelected = () => {
    dispatch(playlistaction.setModalSelected(false));
  };

  return ReactDOM.createPortal(
    <main className={`${modalSelected && styles.modal_background}`}>
      <PlayListContent
        modalSelected={modalSelected}
        closeModalSelected={closeModalSelected}
      />
    </main>,
    document.getElementById("playlistmodal")
  );
};

export default PlayListModal;
