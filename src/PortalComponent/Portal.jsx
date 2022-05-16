import React from "react";
import LogoutModal from "./LogoutModal/LogoutModal";
import { Toast } from "./Toast";

const Portal = () => {
  return (
    <>
      <Toast />
      <LogoutModal />
    </>
  );
};

export { Portal };
