import React, { useState } from "react";
import { deletePurchase, fetchItemDetails } from "./utils";
import { useEffect } from "react";
import { dateFormatter } from "../../utils";
import EditPurchaseModal from "../EditPurchaseModal";

const PurchaseCard = ({ purchase }) => {
  const [itemData, setItemData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchItemDetails(purchase.product_id, setItemData);
  }, []);
  return (
    <div className="w-full mb-4 border-2 px-4">
      <div className="grid grid-cols-2 md:grid-cols-7 py-2">
        <div className="flex col-span-2 items-center gap-4">
          <img
            className="w-32 h-32"
            src={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${itemData.iden}`}
            alt="productImage"
          />
          <h1 className="font-titleFont font-semibold">{itemData.name}</h1>
        </div>
        <div className="flex col-span-2 mdl:col-span-5 items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
          <div className="flex 1-1/4 items-center text-lg font-semibold">
            ${itemData.price}
          </div>
          <div className="1-1/4 flex items-center gap-6 text-lg">
            <p>{purchase.quantity}</p>
          </div>
          <div className="1-1/4 flex items-center font-titleFont font-bold text-lg">
            <p>${purchase.quantity * itemData.price}</p>
          </div>
          <div className="1-1/4 flex items-center font-titleFont font-bold">
            <p>{purchase.status}</p>
          </div>
          <div className="w-1/4">
            <div className="flex flex-col justify-start">
              <button
                className="px-2 py-3 mb-2 rounded-lg bg-primeColor text-white"
                onClick={() => setShowModal(true)}
                disabled={deleting}
              >
                Edit
              </button>
              <button
                className="px-2 py-3 rounded-lg bg-red-500 text-white"
                onClick={() => deletePurchase(purchase._id, token, setDeleting)}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
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
      <EditPurchaseModal
        closeModal={setShowModal}
        modalIsOpen={showModal}
        purchase={purchase}
      />
    </div>
  );
};

export default PurchaseCard;
