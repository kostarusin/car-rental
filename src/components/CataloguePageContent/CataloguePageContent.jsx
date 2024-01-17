import React from "react";
import CarCard from "../CarCard/CarCard";
import style from "./CataloguePageContent.module.css";
import CataloguePageForm from "../CataloguePageForm/CataloguePageForm";

const CataloguePageContent = () => {
  return (
    <div className={style.catalogueWrapper}>
      <div className={style.form}>
        <CataloguePageForm />
      </div>
      <div className={style.carCards}>
        <CarCard />
      </div>
    </div>
  );
};

export default CataloguePageContent;
