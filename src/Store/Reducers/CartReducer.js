import {ADD_TO_CART, REMOVE_FROM_CART} from '../types/types';

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deleteCart = state.filter((curElem, index) => {
        return index !== action.payload;
      });
      return deleteCart;
    default:
      return state;
  }
};

export default CartReducer;
