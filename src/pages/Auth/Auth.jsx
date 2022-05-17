import React from "react";
import { useSelector } from "react-redux";
import { Outlet, NavLink, useLocation, Navigate } from "react-router-dom";
import styles from "./Auth.module.css";

const Auth = () => {
  const activeClass = ({ isActive }) => (isActive ? "actives" : "");
  const isLogin = useSelector((state) => state.login.isLogin);
  const location = useLocation();
  if (isLogin)
    return <Navigate to={location.state?.from?.pathname || "/"} replace />;
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
