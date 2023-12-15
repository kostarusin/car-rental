import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Navigation from "../../components/Navigation/Navigation";

const Header = () => {
  return <div className={style.headerWrapper}>{<Navigation />}</div>;
};

export default Header;
