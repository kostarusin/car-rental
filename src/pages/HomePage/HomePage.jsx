import React from "react";
import style from "./HomePage.module.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

const HomePage = () => {
  return <div className={style.homeWrapper}>{<HomePageContent />}</div>;
};

export default HomePage;
