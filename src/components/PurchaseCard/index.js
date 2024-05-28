import React, { useState } from "react";
import { fetchItemDetails } from "./utils";
import { useEffect } from "react";
import { dateFormatter } from "../../utils";

const PurchaseCard = ({ purchase }) => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    fetchItemDetails(purchase.product_id, setItemData);
  }, []);
  return (
    <div className="w-full mb-4 border border-2 px-4">
      <div className="grid grid-cols-6 py-2">
        <div className="flex col-span-5 md:col-span-2 items-center gap-4">
          <div className="flex col-span-5 md:col-span-2 products-center gap-4 items-center">
            <img
              className="w-32 h-32"
              src={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${itemData.iden}`}
              alt="productImage"
            />
            <h1 className="font-titleFont font-semibold">{itemData.name}</h1>
          </div>
        </div>
        <div className="col-span-5 mdl:col-span-4 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
          <div className="flex w-1/3 items-center text-lg font-semibold">
            ${itemData.price}
          </div>
          <div className="w-1/3 flex items-center gap-6 text-lg">
            <p>{purchase.quantity}</p>
          </div>
          <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
            <p>${purchase.quantity * itemData.price}</p>
          </div>
          <div className="w-1/3 flex items-center font-titleFont font-bold">
            <p>{purchase.status}</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          Purchase Date:{" "}
          <span className="flex-col items-center font-titleFont font-semibold">
            {dateFormatter(purchase.purchase_date)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseCard;
