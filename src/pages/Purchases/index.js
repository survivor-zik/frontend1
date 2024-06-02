import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import { getPurchases } from "./utils";
import PurchaseCard from "../../components/PurchaseCard";

const Purchases = () => {
  const [userPurchases, setUserPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const access_token = localStorage.getItem("token");
  useEffect(() => {
    getPurchases(access_token, setUserPurchases, setLoading);
  }, []);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
      <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-7 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2 className="col-span-2">Products</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total Price</h2>
        <h2>Status</h2>
        <h2>Edit / Delete</h2>
      </div>
      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          userPurchases.map((userPurchase, index) => (
            <div key={index}>
              <div className="w-full font-titleFont font-medium pb-5 px-5">
                <p>
                  Purchase by:{" "}
                  <span className="font-semibold pl-2">
                    {userPurchase.user_id}
                  </span>
                </p>
                {/* <p>
                  Purchase Date:
                  <span className="font-semibold pl-2">
                    {dateFormatter(userPurchase.purchase_date)}
                  </span>
                </p>
                <p>
                  Purchase Sub-Total: $
                  <span className="font-semibold pl-2">
                    {userPurchase.total_price}
                  </span>
                </p>
                <p>
                  Delivery Status:
                  <span className="font-semibold pl-2">
                    {userPurchase.status}
                  </span>
                </p> */}
              </div>
              {userPurchase.purchases.map((purchase) => (
                <PurchaseCard purchase={purchase} key={purchase.product_id} />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Purchases;
