import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./Auth.module.css";

const Auth = () => {
  const activeClass = ({ isActive }) => (isActive ? "actives" : "");
  return (
    <div className={`${styles.auth_main}`}>
      <div className={`${styles.auth_nav_btns} category_chip_text`}>
        <NavLink to={"login"} className={activeClass}>
          <button className="text-btn">Login</button>
        </NavLink>
        <NavLink to={"signup"} className={activeClass}>
          <button className="text-btn"> Signup</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export { Auth };
