import React from "react";
import styles from "./VideoCard.module.css";
import PendingTwoToneIcon from "@mui/icons-material/PendingTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import { useNavigateToSingleVideo } from "../../customHooks";
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
  const navigateToSingleVideo = useNavigateToSingleVideo();
  return (
    <main key={id} className={`${styles.card_container}`}>
      <article onClick={() => navigateToSingleVideo(id)}>
        <img
          className={`img-rounded cursor_pointer`}
          src={thumbnail}
          alt={title}
        />
      </article>

      <article className={`${styles.card_desc}`}>
        <div>
          <img src={avatar} className={`avatar medium`} alt="" />
        </div>
        <div className={`${styles.card_desc_text}`}>
          <div className={`${styles.card_title_more}`}>
            <p className={`videocard_title`}>{title}</p>
            <button>
              <PendingTwoToneIcon />
            </button>
          </div>
          <p className={`videocard_subtitle ${styles.videocard_creator_text}`}>
            {creator}
          </p>
          <div className={`${styles.videocard_views_dur} videocard_subtitle `}>
            <p>
              <VisibilityTwoToneIcon />
              {views}
            </p>
            <p>
              <AccessTimeTwoToneIcon />
              {duration}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default VideoCard;
