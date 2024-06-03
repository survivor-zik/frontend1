import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

const BestSellers = () => {
  const { items } = useSelector((state) => state.orebiReducer);
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id={items[2].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[2].iden}`}
          productName={items[2].name}
          price={items[2].price}
          // color={item.colors}
          badge={true}
          des={items[2].description}
        />
        <Product
          _id={items[3].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[3].iden}`}
          productName={items[3].name}
          price={items[3].price}
          // color={item.colors}
          badge={true}
          des={items[3].description}
        />
        <Product
          _id={items[5].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[5].iden}`}
          productName={items[5].name}
          price={items[5].price}
          // color={item.colors}
          badge={false}
          des={items[5].description}
        />
        <Product
          _id={items[6].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[6].iden}`}
          productName={items[6].name}
          price={items[6].price}
          // color={item.colors}
          badge={true}
          des={items[6].description}
        />
      </div>
    </div>
  );
};

export default BestSellers;
