import React from "react";
import styles from "./Auth_sign_login.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginTestUser } from "../../store/Login/login-testuser-action";
const Login = () => {
  const dispatch = useDispatch();
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
    },
  });
  const loginWithTestCredential = (e) => {
    // e.preventDefault();
    console.log("clicked");
    dispatch(loginTestUser());
  };

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
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.password}
        </div>
      ) : null}
      <button
        type="button"
        onClick={loginWithTestCredential}
        className={`${styles.sign_login_submitbtn}  text-btn`}
      >
        Login with test creadential
      </button>

      <button
        className={`${styles.sign_login_submitbtn} text-btn`}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export { Login };
