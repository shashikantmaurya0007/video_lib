import { Transition } from "react-transition-group";
import styles from "./Header.module.css";
import React from "react";

const HamburgerNav = ({ showHamBurger }) => {
  console.log(showHamBurger);

  return (
    <Transition in={showHamBurger} mountOnEnter unmountOnExit timeout={1000}>
      {(state) => (
        <nav
          className={`${styles["hamburger_" + state]} ${styles.hamburger_nav}`}
        >
          <ul>
            <li></li>
          </ul>
        </nav>
      )}
    </Transition>
  );
};

export default HamburgerNav;
