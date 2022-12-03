import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const stockToggle = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
export const brandsToggle = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
