import React, { useRef, useState } from "react";
import {
  useMobileLayout,
  useSearch,
  useDocumentTitle,
} from "../../../customHooks/index";
import styles from "./Header.module.css";
import DeckTwoToneIcon from "@mui/icons-material/DeckTwoTone";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import HamburgerNav from "./HamburgerNav";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../../store/Explore/filtervideo-slice";
const Header = () => {
  const [showHamBurger, setShowHamBurger] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userInformation = useSelector((state) => state.login.userInformation);
  const displayMobileLayout = useMobileLayout();
  const ref = useRef();
  useDocumentTitle();

  const mobileInputRef = useRef();
  const { validSearch, debounceSearch, setValidSearch } = useSearch();
  const cancelSearch = () => {
    dispatch(filterAction.setResetSearchFilter());
    ref.current.value = "";
    setValidSearch((prev) => false);
  };

  const navigageToProfile = () => navigate("/profile");
  const mobilecancelSearch = () => {
    dispatch(filterAction.setResetSearchFilter());
    mobileInputRef.current.value = "";
    setValidSearch((prev) => false);
  };
  if (displayMobileLayout)
    return (
      <header className={`${styles.navbar_header}`}>
        <nav className={`${styles.nav_container}`}>
          <div className={`${styles.nav_logo} headline`}>
            <MenuTwoToneIcon
              onClick={() => setShowHamBurger(true)}
              className={`${styles.hamburger}`}
            />
            <NavLink to={"/"}>FrontEnd</NavLink>
          </div>
        </nav>
        <div className={`${styles.navbar_search_con}`}>
          <input
            className={`${styles.mobile_search}`}
            type="text"
            ref={mobileInputRef}
            placeholder="search your video here..."
            onChange={(e) => debounceSearch(e)}
          />
          <button className={`${styles.navbar_search_btn}`}>
            <TravelExploreTwoToneIcon />
          </button>
          {validSearch && (
            <button
              onClick={() => mobilecancelSearch()}
              className={`${styles.navbar_search_cancel_btn}`}
            >
              <CloseTwoToneIcon />
            </button>
          )}
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
            ref={ref}
            placeholder="Search your video...."
            onChange={(e) => debounceSearch(e)}
          />
          <button className={`${styles.navbar_search_btn}`}>
            <TravelExploreTwoToneIcon />
          </button>
          {validSearch && (
            <button
              onClick={() => cancelSearch()}
              className={`${styles.navbar_search_cancel_btn}`}
            >
              <CloseTwoToneIcon />
            </button>
          )}
        </div>
        <div onClick={() => navigageToProfile()}>
          <button>
            <PersonOutlineTwoToneIcon />

            <p className={`text-btn`}>
              {" "}
              HI, {isLogin ? userInformation?.firstName : "user"}
            </p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
