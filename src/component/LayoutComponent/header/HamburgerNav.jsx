import { Transition } from "react-transition-group";
import styles from "./Header.module.css";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import ExploreTwoToneIcon from "@mui/icons-material/ExploreTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { modalActions } from "../../../store/Modal/modal-slice";
import { NavLink, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../../../customHooks/useOnClickOutside";

const HamburgerNav = ({ showHamBurger, setShowHamBurger }) => {
  const dispatch = useDispatch();
  const hamburgerRef = useRef();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userInformation = useSelector((state) => state.login.userInformation);
  const closeHamburger = () => {
    setShowHamBurger(false);
  };
  const navigageToProfile = () => {
    navigate("/profile");
    closeHamburger();
  };
  const activeClass = ({ isActive }) => (isActive ? "actives" : "");
  const showLogoutModal = () => {
    dispatch(modalActions.setSelectedModal("logout"));
    setShowHamBurger(false);
  };
  useOnClickOutside(hamburgerRef, closeHamburger);
  return (
    <Transition in={showHamBurger} mountOnEnter unmountOnExit timeout={800}>
      {(state) => (
        <nav
          ref={hamburgerRef}
          className={`${styles["hamburger_" + state]} ${styles.hamburger_nav}`}
        >
          <div className={`${styles.nav_user_profile}`}>
            <div onClick={() => navigageToProfile()} className="badge">
              <img
                className="avatar large"
                src="/assets/profile.gif"
                alt="profile avatar"
              />
              <span className="status-badge online"></span>
            </div>
            <div>
              <p className="text-vs">
                {" "}
                {isLogin
                  ? userInformation?.firstName + " " + userInformation?.lastName
                  : ""}
              </p>
              <p className="text-vs">{isLogin && userInformation?.email}</p>
            </div>
          </div>
          <ul className={`text-btn ${styles.hamburger_nav_list_con}`}>
            <NavLink to={"/"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <CottageTwoToneIcon />
                Home
              </li>
            </NavLink>
            <NavLink to={"/explore"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <ExploreTwoToneIcon /> Explore
              </li>
            </NavLink>
            <NavLink to={"/playlist"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <SubscriptionsTwoToneIcon />
                Playlist
              </li>
            </NavLink>
            <NavLink to={"/watchlater"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <WatchLaterTwoToneIcon />
                Watch Later
              </li>
            </NavLink>
            <NavLink to={"/likes"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <ThumbUpTwoToneIcon />
                Liked videos
              </li>
            </NavLink>
            <NavLink to={"/history"} className={activeClass}>
              <li
                onClick={closeHamburger}
                className={`${styles.hamburger_nav_list}`}
              >
                <WorkHistoryTwoToneIcon />
                History
              </li>
            </NavLink>
            {isLogin ? (
              <li
                onClick={showLogoutModal}
                className={`${styles.hamburger_nav_list}`}
              >
                <LogoutTwoToneIcon />
                Logout
              </li>
            ) : (
              <NavLink to={"/auth"} className={activeClass}>
                <li
                  onClick={closeHamburger}
                  className={`${styles.hamburger_nav_list}`}
                >
                  <VpnKeyTwoToneIcon />
                  Login
                </li>
              </NavLink>
            )}
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
