import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../CarCard/CarCard";
import style from "./CataloguePageContent.module.css";
import CataloguePageForm from "../CataloguePageForm/CataloguePageForm";

const CataloguePageContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [carData, setCarData] = useState([]);
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);

  console.log(currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65aebd161dfbae409a75777f.mockapi.io/adverts/",
          {
            params: {
              page: currentPage,
              limit: 12,
            },
          }
        );

        const newData = response.data;

        setCarData((prevState) => [...prevState, ...newData]);

        if (newData.length < 12) {
          setLoadMoreBtn(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <section className={style.catalogueWrapper}>
      <div className={style.form}>
        <CataloguePageForm />
      </div>
      <ul className={style.carCards}>
        <CarCard carInfoList={carData} />
      </ul>
      {loadMoreBtn && (
        <button type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default CataloguePageContent;
