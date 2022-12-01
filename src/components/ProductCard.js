import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
} from "../redux/actionCreator/productAction";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg rounded-sm border relative p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <p className="grid place-content-center text-white absolute bg-indigo-500 rounded-full h-6 w-6 top-[-10px] right-[-10px]">
          {product.quantity}
        </p>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product?.keyFeature.map((feature, index) => {
            return (
              <li className="text-sm " key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToWishlist(product))}
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
