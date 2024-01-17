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
          <input
            type="text"
            placeholder="Enter the text"
            id="brand"
            list="browsers"
            className={style.brandInp}
          />
          {/* <datalist id="browsers">
            <option>Edge</option>
            <option>Firefox</option>
            <option>Chrome</option>
            <option>Opera</option>
            <option>Safari</option>
          </datalist> */}
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label} for="price">
            Price / 1 hour
          </label>
          <input
            type="text"
            placeholder="To $"
            id="price"
            className={style.priceInp}
          />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label} for="mileage">
            Car mileage / km
          </label>
          <div>
            <input
              type="text"
              placeholder="From"
              id="mileage"
              className={style.mileageInpFrom}
            />
            <input
              type="text"
              placeholder="To"
              id="mileage"
              className={style.mileageInpTo}
            />
          </div>
        </div>
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default CataloguePageForm;
