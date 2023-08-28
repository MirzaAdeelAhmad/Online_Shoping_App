import {ADD_ADDRESS, REMOVE_ADDRESS} from '../types/types';

const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];
    case REMOVE_ADDRESS:
      const deleteAddress = state.filter((curElem, index) => {
        return index !== action.payload;
      });
      return deleteAddress;
    default:
      return state;
  }
};

export default AddressReducer;
