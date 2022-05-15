import React from "react";
import styles from "./Auth_sign_login.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

{
  /* <iframe src="https://gifer.com/embed/CVyf" width=480 height=270.194 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">via GIFER</a></p> */
}
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 character long")
        .required("Required"),
      confirmpassword: Yup.string()
        .min(6, "Must be 6 character long")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      toast.success("succesfully signup");
    },
  });

  return (
    <form
      className={`${styles.sign_login_form}`}
      onSubmit={formik.handleSubmit}
    >
      <div class="lab-input">
        <label>FirstName*</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="shashikant"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.firstName}
        </div>
      ) : null}
      <div class="lab-input">
        <label>LastName*</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Maurya"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.lastName}
        </div>
      ) : null}
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
      <div class="lab-input">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="*****"
          id="confirmpassword"
          name="confirmpassword"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
        />
      </div>
      {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
        <div className={`${styles.sign_login_form_error}`}>
          {formik.errors.confirmpassword}
        </div>
      ) : null}
      <button
        className={`${styles.sign_login_submitbtn} text-btn`}
        type="submit"
      >
        sign-up
      </button>
    </form>
  );
};

export { Signup };
