import React, { useRef } from "react";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import styles from "./Playlist.module.css";
import { toast } from "react-toastify";
import { useDebounce } from "../../customHooks/useDebounce";
const InputForPlaylistName = () => {
  const inputElement = useRef();

  const addInputToPlayList = () => {
    const playlistName = inputElement.current.value.trim();
    if (playlistName == "") {
      toast.warning("Playlist can not be empty!");
    }
  };
  const addInputToPLayListDebounce = useDebounce(addInputToPlayList, 300);

  return (
    <div className={`${styles.playlist_input_con}`}>
      <input
        placeholder="Enter your playlist!"
        type="text"
        ref={inputElement}
      />
      <button onClick={addInputToPLayListDebounce} className="rounded_btn">
        <AddCircleTwoToneIcon />
      </button>
    </div>
  );
};

export { InputForPlaylistName };
