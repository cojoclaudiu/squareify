import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import showCartReducer from './showCartSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    showCart: showCartReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
