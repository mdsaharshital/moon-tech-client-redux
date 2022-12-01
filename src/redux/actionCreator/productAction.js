import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
} from "../actionType/actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};
