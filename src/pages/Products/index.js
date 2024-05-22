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
    <div>
      <AdminHeader />
      <p>Products</p>
      <div>
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
