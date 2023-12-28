import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";

const Header = () => {
  return (
    <div className={style.headerWrapper}>
      {<Logo />}
      {<Navigation />}
      {<UserNav />}
    </div>
  );
};

export default Header;
