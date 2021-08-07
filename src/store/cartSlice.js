import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: null,
};

const cartSlice = () =>
  createSlice({
    name: 'addTo',
    initialState,
    reducers: {
      addItem(state) {
        state.totalItems + 1;
      },

      removeItem(state) {
        state.totalItems - 1;
      },

      adjustItem(state) {},

      currentItem(state) {},
    },
  });
