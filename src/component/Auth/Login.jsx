import React from "react";
import styles from "./Auth_sign_login.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginTestUser } from "../../store/Login/login-testuser-action";
import { useLoginButtonText } from "./AuthCustomHooks/useLoginButtonText";
import { loginUser } from "../../store/Login/login-action";
import { Navigate, useLocation } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const loginButtonText = useLoginButtonText();
  const loading = useSelector((state) => state.login.loading);
  const isLogin = useSelector((state) => state.login.isLogin);
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .trim()
        .min(6, "Must be 6 character long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(loginUser(values));
    },
  });
  const loginWithTestCredential = (e) => {
    dispatch(loginTestUser());
  };
  if (isLogin)
    return <Navigate to={location.state?.from?.pathname || "/"} replace />;

  return (
    <form
      className={`${styles.sign_login_form}`}
      onSubmit={formik.handleSubmit}
    >
      <div class="lab-input">
        <label>Email</label>
        <input
          type="text"
          placeholder="shashimourya1@gmail.com"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          disabled={loading}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.email}
        </div>
      ) : null}
      <div class="lab-input">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*****"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          disabled={loading}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.password}
        </div>
      ) : null}
      <button
        type="button"
        disabled={loading}
        onClick={loginWithTestCredential}
        className={`${styles.sign_login_submitbtn}  text-btn`}
      >
        Login with test creadential
      </button>

      <button
        className={`${styles.sign_login_submitbtn} text-btn`}
        type="submit"
        disabled={loading}
      >
        {loginButtonText}
      </button>
    </form>
  );
};

export { Login };
