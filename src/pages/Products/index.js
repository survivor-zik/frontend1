import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import { getProducts } from "./utils";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts(setProducts, setLoading);
  }, []);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
      <div className="flex px-2 py-4 justify-end">
        <div className="bg-primeColor w-[122px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
          + Add Product
        </div>
      </div>
      <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2 className="col-span-2">Product</h2>
        <h2>Price</h2>
        <h2>Category</h2>
        <h2>Description</h2>
      </div>
      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
