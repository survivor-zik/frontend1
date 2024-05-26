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
    <div className="w-full grid grid-cols-5 mb-4 border py-2 items-center">
      <div className="flex col-span-5 mdl:col-span-2 products-center gap-4 ml-4 items-center">
        <img className="w-32 h-32" src={product.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{product.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex products-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 products-center text-lg font-semibold">
          ${product.price}
        </div>
        <div className="w-1/3 flex products-center gap-6 text-lg">
          <p>{product.categories}</p>
        </div>
        <div className="w-1/3 flex products-center font-titleFont font-bold text-lg">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
