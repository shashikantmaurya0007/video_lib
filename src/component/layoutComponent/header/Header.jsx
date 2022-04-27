import React from "react";
import { useMobileLayout } from "../../../customHooks/index";
import styles from "./Header.module.css";
import DeckTwoToneIcon from "@mui/icons-material/DeckTwoTone";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
const Header = () => {
  var a = "hello";
  const displayMobileLayout = useMobileLayout();
  console.log(displayMobileLayout, a);
  if (displayMobileLayout)
    return (
      <header>
        <nav className={`${styles.nav_container}`}>
          <div className={`${styles.nav_logo} headline`}>
            <MenuTwoToneIcon className={`${styles.hamburger}`} />
            Review
          </div>
        </nav>
        <div className={`${styles.navbar_search_con}`}>
          <input
            className={`${styles.navbar_search}`}
            type="text"
            placeholder="search..."
          />
          <button className={`${styles.navbar_search_btn}`}>
            <TravelExploreTwoToneIcon />
          </button>
        </div>
      </header>
    );
  return (
    <header>
      <nav className={`${styles.nav_container}`}>
        <div className={`${styles.nav_logo} headline`}>Review</div>

        <div className={styles.btn_container}>
          <button>
            <DeckTwoToneIcon />

            <p className={`text-btn`}> Home</p>
          </button>
          <button>
            <OndemandVideoTwoToneIcon />

            <p className={`text-btn`}> explore</p>
          </button>
        </div>

        <div className={`${styles.navbar_search_con}`}>
          <input
            className={`${styles.navbar_search}`}
            type="text"
            placeholder="search..."
          />
          <button className={`${styles.navbar_search_btn}`}>
            <TravelExploreTwoToneIcon />
          </button>
        </div>
        <div className="">
          <button>
            <PersonOutlineTwoToneIcon />

            <p className={`text-btn`}> Hi, user</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
