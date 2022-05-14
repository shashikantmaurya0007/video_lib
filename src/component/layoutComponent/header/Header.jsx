import React, { useState } from "react";
import { useMobileLayout } from "../../../customHooks/index";
import styles from "./Header.module.css";
import DeckTwoToneIcon from "@mui/icons-material/DeckTwoTone";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import HamburgerNav from "./HamburgerNav";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showHamBurger, setShowHamBurger] = useState(false);
  const displayMobileLayout = useMobileLayout();

  if (displayMobileLayout)
    return (
      <header className={`${styles.navbar_header}`}>
        <nav className={`${styles.nav_container}`}>
          <div className={`${styles.nav_logo} headline`}>
            <MenuTwoToneIcon
              onClick={() => setShowHamBurger((prev) => !prev)}
              className={`${styles.hamburger}`}
            />
            <NavLink to={"/"}>FrontEnd</NavLink>
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
        {
          <HamburgerNav
            showHamBurger={showHamBurger}
            setShowHamBurger={setShowHamBurger}
          />
        }
      </header>
    );
  return (
    <header className={`${styles.navbar_header}`}>
      <nav className={`${styles.nav_container}`}>
        <NavLink to={"/"}>
          <div className={`${styles.nav_logo} headline`}>FrontEnd</div>
        </NavLink>

        <div className={styles.btn_container}>
          <NavLink to={"/"}>
            <button>
              <DeckTwoToneIcon />

              <p className={`text-btn`}> Home</p>
            </button>
          </NavLink>
          <NavLink to={"/explore"}>
            <button>
              <OndemandVideoTwoToneIcon />

              <p className={`text-btn`}> explore</p>
            </button>
          </NavLink>
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
