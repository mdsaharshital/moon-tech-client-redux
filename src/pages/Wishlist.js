import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {wishlist
          .sort((a, b) => a._id - b._id)
          .map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
