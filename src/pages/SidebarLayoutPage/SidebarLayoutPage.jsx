import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../component/index";
import styles from "./SidebarLayoutPage.module.css";
import { useMobileLayout } from "../../customHooks/useMobileLayout";
const SidebarLayoutPage = () => {
  const displayMobileLayout = useMobileLayout();
  return (
    <div className={`${styles.sidebar_con}`}>
      {!displayMobileLayout && <SideBar />}
      <div className={`${styles.outlet_}`}>
        <Outlet />
      </div>
    </div>
  );
};

export { SidebarLayoutPage };
