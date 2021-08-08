import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import showCartReducer from './showCartSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    showCart: showCartReducer,
    cart: cartReducer,
  },
});

export default store;
