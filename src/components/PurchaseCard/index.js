import React, { useState } from "react";
import { fetchItemDetails } from "./utils";
import { useEffect } from "react";

const PurchaseCard = ({ purchase, quantity }) => {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchItemDetails(setItemData, setLoading);
  }, []);
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <h1 className="font-titleFont font-semibold">{purchase.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${purchase.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <p>{quantity}</p>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${purchase.quantity * purchase.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
