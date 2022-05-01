import { Transition } from "react-transition-group";
import styles from "./Header.module.css";
import React from "react";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import ExploreTwoToneIcon from "@mui/icons-material/ExploreTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ManageHistoryTwoToneIcon from "@mui/icons-material/ManageHistoryTwoTone";

const HamburgerNav = ({ showHamBurger, setShowHamBurger }) => {
  const closeHamburger = () => {
    setShowHamBurger((prev) => !prev);
  };

  return (
    <Transition in={showHamBurger} mountOnEnter unmountOnExit timeout={1000}>
      {(state) => (
        <nav
          className={`${styles["hamburger_" + state]} ${styles.hamburger_nav}`}
        >
          <div className={`${styles.nav_user_profile}`}>
            <div className="badge">
              <img
                className="avatar large"
                src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;au"
                alt="profile avatar"
              />
              <span className="status-badge online"></span>
            </div>
            <div>
              <p className="text-vs">shashikant Maurya</p>
              <p className="text-vs">shashimourya1@gmail.com</p>
            </div>
          </div>
          <ul className={`text-btn ${styles.hamburger_nav_list_con}`}>
            <li className={`${styles.hamburger_nav_list}`}>
              <CottageTwoToneIcon />
              Home
            </li>
            <li className={`${styles.hamburger_nav_list}`}>
              <ExploreTwoToneIcon /> Explore
            </li>
            <li className={`${styles.hamburger_nav_list}`}>
              <SubscriptionsTwoToneIcon />
              Playlist
            </li>
            <li className={`${styles.hamburger_nav_list}`}>
              <WatchLaterTwoToneIcon />
              Watch Later
            </li>
            <li className={`${styles.hamburger_nav_list}`}>
              <ThumbUpTwoToneIcon />
              Liked videos
            </li>
            <li className={`${styles.hamburger_nav_list}`}>
              {/* <ManageHistoryTwoToneIcon /> */}
              History
            </li>
            <li>Login</li>
          </ul>
          <div className={`${styles.hamburger_nav_close_btn}`}>
            <ArrowBackIosTwoToneIcon onClick={closeHamburger} />{" "}
          </div>
        </nav>
      )}
    </Transition>
  );
};

export default HamburgerNav;
