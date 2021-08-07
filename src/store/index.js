import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import showCartReducer from './showCartSlice';

const store = configureStore({
  reducer: { auth: authReducer, showCart: showCartReducer },
});

export default store;
