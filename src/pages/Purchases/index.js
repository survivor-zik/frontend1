import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import { getPurchases } from "./utils";
import PurchaseCard from "../../components/PurchaseCard";
import { dateFormatter } from "../../utils";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const access_token = localStorage.getItem("token");
  useEffect(() => {
    console.log("token purchase", access_token);
    getPurchases(access_token, setPurchases, setLoading);
  }, [access_token]);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
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
          purchases.map((purchase, index) => (
            <div key={index}>
              <div className="w-full font-titleFont font-medium pb-5 px-5">
                <p>
                  Purchase by:{" "}
                  <span className="font-semibold pl-2">{purchase.user_id}</span>
                </p>
                <p>
                  Purchase Date:
                  <span className="font-semibold pl-2">
                    {dateFormatter(purchase.purchase_date)}
                  </span>
                </p>
                <p>
                  Purchase Sub-Total $ :
                  <span className="font-semibold pl-2">
                    {purchase.total_price}
                  </span>
                </p>
              </div>
              {purchase.items.map((item) => (
                <PurchaseCard purchase={item} quantity={item.quantity} />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Purchases;
