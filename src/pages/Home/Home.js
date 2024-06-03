import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./utils";

const Home = () => {
  // const { items } = useSelector((state) => state.orebiReducer);
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (items.length < 1) {
    fetchProducts(dispatch);
    // } else {
    // setProducts(items);
    // }
  }, []);
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
