import { createSlice } from '@reduxjs/toolkit';
import floatCalc from '../utils/floatCalc';

const initialState = {
  items: [],
  totalCartItems: 0,
  totalCartAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const addedItem = action.payload;

      const existingItem = state.items.find((item) => item.productId === addedItem.id);
      state.totalCartItems += 1;

      if (!existingItem) {
        state.items.push({
          productId: addedItem.id,
          productUrl: addedItem.url,
          productImage: addedItem.image,
          productName: addedItem.name,
          productPrice: Number(addedItem.price),
          quantity: 1,
          totalProductPrice: Number(addedItem.price),
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalProductPrice = floatCalc(
          Number(existingItem.totalProductPrice) + Number(addedItem.price),
        );
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalCartItems -= 1;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalProductPrice -= Number(existingItem.productPrice);
      }
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
