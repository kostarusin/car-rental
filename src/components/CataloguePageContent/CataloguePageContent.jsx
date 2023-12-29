import React from "react";
import CarCard from "../CarCard/CarCard";
import style from "./CataloguePageContent.module.css"

const CataloguePageContent = () => {
  return (
    <div className={style.catalogueWrapper}>
      <CarCard />
    </div>
  );
};

export default CataloguePageContent;
