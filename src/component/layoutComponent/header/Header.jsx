import React from "react";
import { useMobileLayout } from "../../../customHooks/index";

const Header = () => {
  var a = "hello";
  const displayMobileLayout = useMobileLayout();
  console.log(displayMobileLayout, a);
  if (displayMobileLayout) return <h1>mobile layout</h1>;
  return (
    <header>
      <nav></nav>
    </header>
  );
};

export default Header;
