import React from "react";

{
  /* <p>{product.name}</p>
<p>{product.id}</p>
<p>{product.categories}</p>
<p>{product.colors}</p>
<p>{product.description}</p> */
}
const ProductCard = ({ product }) => {
  return (
    <div className="h-28 w-[99%]">
      <div className="rounded-lg border border-slate-400 my-2 mx-1 py-2 px-2 flex justify-between w-full">
        <div className="border border-x-2 rounded-lg flex-col  py-2 px-1.5">
          <div className="text-2xl font-bold h-[40%]">
            <p>{product.name}</p>
          </div>
          <div className="text-lg font-semibold h-[30%]">
            <p>{product.description}</p>
          </div>
          <div className="flex justify-between h-[30%]">
            Category:
            <span className="justify-items-end">{product.categories}</span>
          </div>
        </div>
        <div className="flex-col border border-x-2 rounded-lg py-2 px-1.5">
          <p className="flex justify-between">
            Color:
            <span className="justify-items-end">{product.colors}</span>
          </p>
          <p className="flex justify-between">
            Price: $<span className="justify-items-end">{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
