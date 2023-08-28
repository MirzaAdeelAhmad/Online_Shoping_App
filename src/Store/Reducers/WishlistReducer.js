import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../types/types';

const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      const deleteWishlist = state.filter((curElem, index) => {
        return index !== action.payload;
      });
      return deleteWishlist;
    default:
      return state;
  }
};

export default WishlistReducer;
