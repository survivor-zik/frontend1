import React, { useState } from "react";
import { handleDelete } from "./utils";

const ProductCard = ({ product }) => {
  const [deleting, setDeleting] = useState(false);
  return (
    <div className="w-full grid grid-cols-6 mb-4 border py-2 items-center">
      <div className="flex col-span-5 mdl:col-span-2 products-center gap-4 ml-4 items-center">
        <img
          className="w-32 h-32"
          src={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${product.iden}`}
          alt="productImage"
        />
        <h1 className="font-titleFont font-semibold">
          {product.name.slice(0, 25)}...
        </h1>
      </div>
      <div className="col-span-4 md:col-span-4 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/4 products-center text-lg font-semibold">
          ${product.price}
        </div>
        <div className="w-1/4 flex products-center gap-6 text-lg">
          <p>{product.categories}</p>
        </div>
        <div className="w-1/4 flex products-center font-titleFont font-bold text-lg">
          <p>{product.description.slice(0, 25)}...</p>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col justify-start w-[50%]">
            <button
              className="px-2 py-3 mb-2 rounded-lg bg-primeColor text-white"
              disabled={deleting}
            >
              Edit
            </button>
            <button
              className="px-2 py-3 rounded-lg bg-red-500 text-white"
              onClick={() => handleDelete(product.iden, setDeleting)}
              disabled={deleting}
            >
              {deleting ? "Deleting" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
