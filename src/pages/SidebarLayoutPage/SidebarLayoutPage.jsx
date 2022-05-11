import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../component/index";
import styles from "./SidebarLayoutPage.module.css";
const SidebarLayoutPage = () => {
  return (
    <div className={`${styles.sidebar_con}`}>
      <SideBar />
      <div className={`${styles.outlet_}`}>
        <Outlet />
      </div>
    </div>
  );
};

export { SidebarLayoutPage };
