import React from "react";
import styles from "./HorizontalVideoCard.module.css";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useNavigate } from "react-router-dom";
const HorizontalVideoCard = ({ video, deleteVideo }) => {
  const navigate = useNavigate();
  const navigateToExplorePage = () => {
    navigate(`/video/${video._id}`);
  };
  return (
    <main
      onClick={() => navigateToExplorePage()}
      className={`${styles.horizontal_card} cursor_pointer`}
    >
      <img
        className={`${styles.horizontal_avatar}`}
        src={video.thumbnail}
        alt=""
      />

      <section className={`${styles.horizontal_des}`}>
        <p className={`videocard_subtitle`}>{video.creator}</p>
        <p className={`videocard_title`}>{video.title}</p>
        <p className={`videocard_subtitle ellipsis-text`}>
          {video.description}
        </p>
        <div className={` ${styles.horizontal_views_dur} `}>
          <p className={`same_line videocard_subtitle`}>
            <VisibilityTwoToneIcon />
            {video?.views}
          </p>
          <p className="same_line videocard_subtitle ">
            <AccessTimeTwoToneIcon />
            {video?.duration}
          </p>
        </div>
        <button
          title="remove"
          className={`${styles.horizontalcard_delete_btn}`}
          onClick={(e) => {
            e.stopPropagation();
            deleteVideo(video);
          }}
        >
          <DeleteTwoToneIcon />
        </button>
      </section>
    </main>
  );
};

export { HorizontalVideoCard };
