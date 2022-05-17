import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import ExploreTwoToneIcon from "@mui/icons-material/ExploreTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal/modal-slice";

const SideBar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userInformation = useSelector((state) => state.login.userInformation);

  const activeClass = ({ isActive }) => (isActive ? "actives" : "");
  const showLogoutModal = () => {
    dispatch(modalActions.setSelectedModal("logout"));
  };
  return (
    <div>
      <nav className={` ${styles.sidebar_nav}`}>
        <div className={`${styles.nav_user_profile}`}>
          <div className="badge">
            <img
              className="avatar large"
              src="/assets/profile.gif"
              alt="profile avatar"
            />
            <span className="status-badge online"></span>
          </div>
          <div>
            <p className="text-vs">
              {isLogin
                ? userInformation?.firstName + " " + userInformation?.lastName
                : ""}
            </p>
            <p className="text-vs">{isLogin && userInformation?.email}</p>
          </div>
        </div>
        <ul className={`text-btn ${styles.sidebar_nav_list_con}`}>
          <NavLink to={"/"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <CottageTwoToneIcon />
              Home
            </li>
          </NavLink>
          <NavLink to={"/explore"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <ExploreTwoToneIcon /> Explore
            </li>
          </NavLink>
          <NavLink to={"/playlist"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <SubscriptionsTwoToneIcon />
              Playlist
            </li>
          </NavLink>
          <NavLink to={"/watchlater"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <WatchLaterTwoToneIcon />
              Watch Later
            </li>
          </NavLink>
          <NavLink to={"/likes"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <ThumbUpTwoToneIcon />
              Liked videos
            </li>
          </NavLink>
          <NavLink to={"/history"} className={activeClass}>
            <li className={`${styles.sidebar_nav_list}`}>
              <WorkHistoryTwoToneIcon />
              History
            </li>
          </NavLink>
          {isLogin ? (
            <li
              onClick={showLogoutModal}
              className={`${styles.sidebar_nav_list}`}
            >
              <LogoutTwoToneIcon />
              Logout
            </li>
          ) : (
            <NavLink to={"/auth"} className={activeClass}>
              <li className={`${styles.sidebar_nav_list}`}>
                <VpnKeyTwoToneIcon />
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
