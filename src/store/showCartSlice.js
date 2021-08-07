import { createSlice } from '@reduxjs/toolkit';

const showCart = createSlice({
  name: 'showCart',
  initialState: { isVisible: false },
  reducers: {
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleCart } = showCart.actions;
export default showCart.reducer;
