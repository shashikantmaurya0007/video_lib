import React from "react";

import styles from "./LandingPage.module.css";
const Banner = () => {
  return (
    <div className={`${styles.landingPage_banner}`}>
      <div>
        <img className="img-rounded"
          src={process.env.PUBLIC_URL + "/assets/dsa_corousel.jpeg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
