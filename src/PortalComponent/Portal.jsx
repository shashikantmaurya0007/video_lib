import React from "react";
import LogoutModal from "./LogoutModal/LogoutModal";
import PlayListDeleteModal from "./PlayListDeleteModal/PlayListDeleteModal";
import PlayListModal from "./PlaylistModal/PlaylistModal";
import { Toast } from "./Toast";

const Portal = () => {
  return (
    <>
      <Toast />
      <LogoutModal />
      <PlayListModal />
      <PlayListDeleteModal />
    </>
  );
};

export { Portal };
