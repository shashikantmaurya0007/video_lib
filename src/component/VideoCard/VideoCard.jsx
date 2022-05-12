import React from "react";
import styles from "./VideoCard.module.css";
const VideoCard = ({ video }) => {
  const {
    _id: id,
    title,
    views,
    duration,
    creator,
    thumbnail,
    avatar,
  } = { ...video };
  return (
    <main className={`${styles.card_container}`}>
      <article>
        <img className={`img-rounded`} src={thumbnail} alt={title} />
      </article>

      <article></article>
    </main>
  );
};

export default VideoCard;
