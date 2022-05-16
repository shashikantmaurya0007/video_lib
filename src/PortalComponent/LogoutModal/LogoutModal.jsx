import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import styles from "../modal.module.css";
import { useSelector } from "react-redux";
const LogoutModal = () => {
  const modalSelected = useSelector((state) => state.modal.modalSelected);

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
          <button>
            <CancelTwoToneIcon />
          </button>
        </header>
        <section className={`  ${styles.modal_content_desc}`}>
          you will loose all your data related to this app..
        </section>
        <footer className={`${styles.modal_action_btn_con}`}>
          <div className={`${styles.modal_action_btn}`}>
            <button className="modal_primary_btn">cancel</button>
            <button className="modal_secondary_btn">logout</button>
          </div>
        </footer>
      </section>
    </main>,
    document.getElementById("modal")
  );
};

export default LogoutModal;
