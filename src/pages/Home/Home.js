import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setItems } from "../../redux/orebiSlice";

const Home = () => {
  const { items } = useSelector((state) => state.orebiReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://mathematical-lavinia-survivor.koyeb.app/products/", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(setItems(response.data));
        })
        .catch((err) => {
          console.log("Get Products failed", err);
          dispatch(setItems([]));
        });
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      {items.length > 0 ? (
        <div className="max-w-container mx-auto px-4">
          <Sale />
          <NewArrivals items={items} />
          <BestSellers items={items} />
          <YearProduct />
          <SpecialOffers items={items} />
        </div>
      ) : (
        <div
          role="status"
          class="container mx-auto animate-pulse flex my-4 gap-4"
        >
          <div className="flex-col w-1/3">
            <div class="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div class="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div class="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <div className="flex-col w-1/3">
            <div class="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div class="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div class="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
          <div className="flex-col w-1/3">
            <div class="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div class="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div class="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
