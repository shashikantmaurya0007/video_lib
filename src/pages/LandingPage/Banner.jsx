import React from "react";
import { Transition } from "react-transition-group";
import styles from "./LandingPage.module.css";
import DirectionsRunTwoToneIcon from "@mui/icons-material/DirectionsRunTwoTone";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const navigateToExplorePage = () => {
    navigate("/explore");
  };
  return (
    <div className={`${styles.landingPage_banner}`}>
      <img
        className="img-rounded"
        src={process.env.PUBLIC_URL + "/assets/homepage_banner.jpg"}
        alt=""
      />
      <Transition in={true} mountOnEnter unmountOnExit timeout={1000}>
        {(state) => (
          <>
            {console.log(state)}
            <button
              className={`${styles.banner_btn} text-btn`}
              onClick={navigateToExplorePage}
            >
              Start Learning{" "}
              <p>
                <DirectionsRunTwoToneIcon />
              </p>
            </button>
          </>
        )}
      </Transition>
    </div>
  );
};

export default Banner;
