import CartReducer from './Reducers/CartReducer';
import WishlistReducer from './Reducers/WishlistReducer';
import AddressReducer from './Reducers/AddressReducer';
import {combineReducers} from 'redux';
import {createStore} from 'redux';

const rootReducer = combineReducers({
  CartReducer,
  WishlistReducer,
  AddressReducer,
});
const store = createStore(rootReducer);
export default store;
