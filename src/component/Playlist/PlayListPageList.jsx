import React from "react";
import { useSelector } from "react-redux";
import { PlayListCard } from "./PlayListCard";
import styles from "./Playlist.module.css";
const PlayListPageList = () => {
  const playlist = useSelector((state) => state.playlist.playlists_);
  return (
    <main className={`${styles.playlist_main_con}`}>
      {playlist?.map((ele) => (
        <PlayListCard key={ele?._id} title={ele.title} playlistId={ele._id} />
      ))}
    </main>
  );
};

export { PlayListPageList };
