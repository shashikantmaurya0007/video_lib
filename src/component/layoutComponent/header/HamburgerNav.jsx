import { Transition } from "react-transition-group";
import styles from "./Header.module.css";
import React from "react";

const HamburgerNav = ({ showHamBurger }) => {
  console.log(showHamBurger);

  return (
    <Transition in={showHamBurger} mountOnEnter unmountOnExit timeout={1000}>
      {(state) => (
        <div className={`${styles["hamburger_" + state]}`}>
          {console.log(state, "aamir")}HamburgerNav
        </div>
      )}
    </Transition>
  );
};

export default HamburgerNav;
