import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../actionType/actionType";

const initialState = {
  cart: [],
  wishlist: [],
};
const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  const selectedWishlist = state.wishlist.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;
        console.log(selectedProduct);
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity - 1;
        console.log(selectedProduct);
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    // wishlist--------------//
    case ADD_TO_WISHLIST:
      if (selectedWishlist) {
        const newWishlist = state.wishlist.filter(
          (product) => product._id !== selectedWishlist._id
        );
        return {
          ...state,
          wishlist: [...newWishlist, selectedWishlist],
        };
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default productReducer;
