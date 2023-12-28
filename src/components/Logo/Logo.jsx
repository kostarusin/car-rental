import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={style.logo} to="/">
      RentUa
    </Link>
  );
};

export default Logo;
