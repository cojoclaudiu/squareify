import { combineReducers } from '@reduxjs/toolkit';

import wishlist from './wishlistSlice';
import auth from './authSlice';
import showCart from './showCartSlice';
import cart from './cartSlice';

const rootReducer = combineReducers({
  wishlist,
  auth,
  showCart,
  cart,
});

export default rootReducer;
