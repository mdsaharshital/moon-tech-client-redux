import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filter: {
    brands: [],
    stock: false,
  },
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      if (!state.filter.brands.includes(action.payload)) {
        return {
          ...state,
          filter: {
            ...state.filter,
            brands: [...state.filter.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filter: {
            ...state.filter,
            brands: state.filter.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }

    case TOGGLE_STOCK:
      return {
        ...state,
        filter: {
          ...state.filter,
          stock: !state.filter.stock,
        },
      };
    default:
      return state;
  }
};
