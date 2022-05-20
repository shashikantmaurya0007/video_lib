import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NoVideoExplore.module.css";
const NoVideoExplore = () => {
  const navigate = useNavigate();
  const navigateToExplore = () => navigate("/explore");
  return (
    <div className={`${styles.no_videoexplore_con}`}>
      <p className="videocard_subtitle">
        You have not added any Videos to list .click Below to Explore Videos
      </p>
      <img
        src="/assets/ExplorePage.gif"
        alt="Explore page"
        className={`cursor_pointer`}
        onClick={() => navigateToExplore()}
      />
    </div>
  );
};

export { NoVideoExplore };
