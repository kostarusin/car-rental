import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CarCard from "../CarCard/CarCard";
import style from "./CataloguePageContent.module.css";
import CataloguePageForm from "../CataloguePageForm/CataloguePageForm";

const API_ENDPOINT = "https://65aebd161dfbae409a75777f.mockapi.io/adverts/";

const CataloguePageContent = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [carData, setCarData] = useState([]);
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const url = `${API_ENDPOINT}?page=${paginationPage}&limit=12`;
  const isInitialMount = useRef(true);

  console.log(url);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(url);

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
  }, [paginationPage]);

  const onLoadMore = () => {
    setPaginationPage((prevState) => prevState + 1);
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
        <button type="button" className={style.button} onClick={onLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default CataloguePageContent;
