import React from "react";
import CarCard from "../CarCard/CarCard";
import style from "./CataloguePageContent.module.css";
import CataloguePageForm from "../CataloguePageForm/CataloguePageForm";

const CataloguePageContent = () => {
  return (
    <section className={style.catalogueWrapper}>
      <div className={style.form}>
        <CataloguePageForm />
      </div>
      <ul className={style.carCards}>
        <CarCard />
      </ul>
    </section>
  );
};

export default CataloguePageContent;
