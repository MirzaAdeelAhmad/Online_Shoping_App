import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  ADD_ADDRESS,
  REMOVE_ADDRESS,
} from '../types/types';

export const AddToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
export const RemoveFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const AddToWishList = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});
export const RemoveFromWishList = id => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});
export const AddToAddress = data => ({
  type: ADD_ADDRESS,
  payload: data,
});
export const RemoveToAddress = id => ({
  type: REMOVE_ADDRESS,
  payload: id,
});
