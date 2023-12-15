import React from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="/catalogue">
        Catalogue
      </Link>
      <Link className={style.link} to="/favorite">
        Favorite
      </Link>
    </nav>
  );
};

export default Navigation;
