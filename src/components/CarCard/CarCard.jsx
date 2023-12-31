import React from "react";
import style from "./CarCard.module.css";
import data from "../../assets/advertsCars.json";
import image from "../../assets/carimg.jpg";

const CarCard = () => {
  const carInfoList = data;

  const getRandomItem = (arrays) => {
    const randomArrayIndex = Math.floor(Math.random() * arrays.length);
    const selectedArray = arrays[randomArrayIndex];
    const randomIndex = Math.floor(Math.random() * selectedArray.length);
    return selectedArray[randomIndex];
  };

  return (
    <>
      {carInfoList.map((car, id) => {
        const addressParts = car.address.split(",");
        const city = addressParts.length > 1 ? addressParts[1].trim() : "";
        const country = addressParts.length > 1 ? addressParts[2].trim() : "";

        const randomCharacteristic = getRandomItem([
          car.accessories,
          car.functionalities,
        ]);

        return (
          <div key={id} className={style.cardWrapper}>
            <div>
              <img src={image} alt={car.model} className={style.carImage} />
              <div className={style.carDataWrapper}>
                <p className={style.carMainInfo}>
                  {car.make} <span className={style.carModel}>{car.model}</span>
                  , {car.year}
                </p>
                <p className={style.carRentalPrice}>{car.rentalPrice}</p>
              </div>
              <p className={style.info}>
                {`${city} ${country} ${car.rentalCompany} ${car.type} ${car.make} ${car.mileage} ${randomCharacteristic}`}
              </p>
            </div>
            <button type="button" className={style.button}>
              Learn more
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CarCard;
