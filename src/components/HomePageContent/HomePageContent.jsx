import React from "react";
import { Link } from "react-router-dom";
import style from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <section className={style.HomePageWrapper}>
      <h1 className={style.HomePageTitle}>RentUa</h1>
      <h2 className={style.HomePageTitle}>
        The easiest way to rent a unic car in Ukraine!
      </h2>
      <Link className={style.HomePageLink} to="/catalogue">
        Learn more
      </Link>
    </section>
  );
};

export default HomePageContent;
