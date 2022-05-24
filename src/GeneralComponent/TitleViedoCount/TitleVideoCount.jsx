import React from "react";
import styles from "./TitleVideoCount.module.css";
const TitleVideoCount = ({
  title,
  count,
  buttonText,
  displayButton,
  buttonAction,
}) => {
  return (
    <div className={`${styles.title_button_con}`}>
      <div className={`${styles.title_count}`}>
        <p className={`category-heading`}>{title}.</p>
        <p className={`videocard_subtitle`}>
          {count}
          {title === "PlayListCount" ? "PlayList" : "videos"}
        </p>
      </div>

      {displayButton && (
        <button onClick={() => buttonAction()}>{buttonText}</button>
      )}
    </div>
  );
};

export { TitleVideoCount };
