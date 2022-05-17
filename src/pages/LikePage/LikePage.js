import React from "react";
import { Link } from "react-router-dom";

const LikePage = () => {
  return (
    <div>
      LikePage
      <Link to={"/auth/signup"}> login</Link>
    </div>
  );
};

export { LikePage };
