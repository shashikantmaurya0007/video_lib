import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal/modal-slice";
import styles from "./ProfilePage.module.css";
import buttonStyles from "../../component/SideBar/SideBar.module.css";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
const ProfilePage = () => {
  const dispatch = useDispatch();

  const userInformation = useSelector((state) => state.login.userInformation);
  const showLogoutModal = () => {
    dispatch(modalActions.setSelectedModal("logout"));
  };
  return (
    <div className={`${styles.profile_page_con}`}>
      <div className={`${styles.nav_user_profile}`}>
        <div className="badge">
          <img
            className="avatar large"
            src="/assets/profile.gif"
            alt="profile avatar"
          />
          <span className="status-badge online"></span>
        </div>
      </div>
      <div>
        <p className={styles.profile_text}>
          Name:-{userInformation?.firstName + " " + userInformation?.lastName}
        </p>
        <p className={styles.profile_text}>Email:-{userInformation?.email}</p>
      </div>
      <li
        onClick={showLogoutModal}
        className={`${buttonStyles.sidebar_nav_list}`}
      >
        <LogoutTwoToneIcon />
        Logout
      </li>
    </div>
  );
};

export { ProfilePage };
