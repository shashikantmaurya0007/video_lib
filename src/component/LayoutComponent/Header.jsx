import React from "react";
import { useMobileLayout } from "../../customHooks/index";

const Header = () => {
  var a = "hello";
  const displayMobileLayout = useMobileLayout();
  console.log(displayMobileLayout, a);
  return <div>Header</div>;
};

export default Header;
