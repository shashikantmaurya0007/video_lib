import React from "react";
import LogoutModal from "./LogoutModal/LogoutModal";
import PlayListModal from "./PlaylistModal/PlaylistModal";
import { Toast } from "./Toast";

const Portal = () => {
  return (
    <>
      <Toast />
      <LogoutModal />
      <PlayListModal />
    </>
  );
};

export { Portal };
