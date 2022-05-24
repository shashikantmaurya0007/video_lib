import React from "react";
import { Transition } from "react-transition-group";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import styles from "../modal.module.css";
import { InputForPlaylistName } from "../../component/Playlist/InputForPlaylistName ";
import { PlayListList } from "../../component/Playlist/PlayListList";
const PlayListContent = ({ modalSelected, closeModalSelected }) => {
  return (
    <Transition in={modalSelected} mountOnEnter unmountOnExit timeout={800}>
      {(state) => (
        <section
          className={`${styles[`modal_` + state]} ${
            styles.playlist_modal_content
          }`}
        >
          <header className={`${styles.modal_header}`}>
            <h1>
              PlayList
              <OndemandVideoTwoToneIcon />
            </h1>
            <button
              onClick={() => {
                closeModalSelected();
              }}
            >
              <CancelTwoToneIcon />
            </button>
          </header>
          <section className={`  ${styles.playlist_modal_content_desc}`}>
            <PlayListList />
          </section>
          <footer className={`${styles.modal_action_btn_con}`}>
            <InputForPlaylistName />
          </footer>
        </section>
      )}
    </Transition>
  );
};

export { PlayListContent };
