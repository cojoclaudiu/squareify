import { combineReducers } from '@reduxjs/toolkit';

import wishlist from './wishlistSlice';
import cart from './cartSlice';
import apiSlice from './apiSlice';
import userConfig from './userSlice';

const rootReducer = combineReducers({
  wishlist,
  cart,
  userConfig,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
