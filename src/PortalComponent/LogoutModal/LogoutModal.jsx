import React from "react";
import ReactDOM from "react-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import styles from "../modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/Modal/modal-slice";
import { logoutUser } from "../../store/Login/logout-action";
const LogoutModal = () => {
  const dispatch = useDispatch();
  const modalSelected = useSelector((state) => state.modal.modalSelected);
  const cancelLogout = () => {
    dispatch(modalActions.setDefaultModal());
  };
  const successfullLogout = async () => {
    dispatch(logoutUser());
    dispatch(modalActions.setDefaultModal());
  };
  if (modalSelected !== "logout") {
    document.body.style.overflow = "unset";
    return null;
  } else {
    document.body.style.overflow = "hidden";
  }
  return ReactDOM.createPortal(
    <main className={`${styles.modal_background}`}>
      <section className={`${styles.modal_content}`}>
        <header className={`${styles.modal_header}`}>
          <h1>
            Are you sure
            <HelpTwoToneIcon />
          </h1>
          <button onClick={cancelLogout}>
            <CancelTwoToneIcon />
          </button>
        </header>
        <section className={`  ${styles.modal_content_desc}`}>
          you will loose all your data related to this app..
        </section>
        <footer className={`${styles.modal_action_btn_con}`}>
          <div className={`${styles.modal_action_btn}`}>
            <button onClick={cancelLogout} className="modal_primary_btn">
              cancel
            </button>
            <button onClick={successfullLogout} className="modal_secondary_btn">
              logout
            </button>
          </div>
        </footer>
      </section>
      )
    </main>,
    document.getElementById("modal")
  );
};

export default LogoutModal;
