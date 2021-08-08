import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalWishes: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {
    addToWishlist(state, action) {
      const addedItem = action.payload;

      const existingItem = state.items.find((item) => item.productId === addedItem.id);

      if (!existingItem) {
        state.items.push({
          productId: addedItem.id,
          productUrl: addedItem.url,
          productImage: addedItem.image,
          productName: addedItem.name,
          productPrice: Number(addedItem.price),
        });
        state.totalWishes += 1;
      }
    },

    removeFromWishlist(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.exist) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalWishes -= 1;
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
