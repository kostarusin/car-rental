import React from "react";
import style from "./CataloguePageForm.module.css";

const CataloguePageForm = () => {
  return (
    <>
      <form className={style.form}>
        <div className={style.inputWrapper}>
          <label className={style.label} for="brand">
            Car brand
          </label>
          <input type="text" id="brand" className={style.brandInp} />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label} for="price">
            Price / 1 hour
          </label>
          <input type="text" id="price" className={style.priceInp} />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label} for="mileage">
            Car mileage / km
          </label>
          <input type="text" id="mileage" className={style.mileageInp} />
        </div>
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default CataloguePageForm;
