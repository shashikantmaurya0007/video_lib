import React from "react";
import styles from "./TitleVideoCount.module.css";
const TitleVideoCount = ({ title, count }) => {
  return (
    <div>
      <div className={`${styles.title_count}`}>
        <p className={`category-heading`}>{title}.</p>
        <p className={`videocard_subtitle`}>{count} videos</p>
      </div>
    </div>
  );
};

export { TitleVideoCount };
