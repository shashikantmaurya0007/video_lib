import React, { useRef } from "react";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import styles from "./Playlist.module.css";
import { toast } from "react-toastify";
import { useDebounce } from "../../customHooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../../store/PlayList/create-playlistaction";
const InputForPlaylistName = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const playlists = useSelector((state) => state.playlist.playlists_);
  const addInputToPlayList = async () => {
    const playlistName = inputElement.current.value.trim();
    if (playlistName == "") {
      toast.warning("Playlist can not be empty!");
      return;
    }
    const find = await playlists?.find((el) => el.title === playlistName);
    if (find) {
      toast.error("Already exist playlist with this title!");
      return;
    }
    inputElement.current.value = "";
    dispatch(createPlaylist(playlistName, encodedToken));
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
