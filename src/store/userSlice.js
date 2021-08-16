import { createSlice } from '@reduxjs/toolkit';
import apiSlice from './apiSlice';

const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  name: null,
  email: null,
  avatar: null,
};

const userSlice = createSlice({
  name: 'userConfig',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(apiSlice.endpoints.loginWithGoogle.matchFulfilled, (state, { payload }) => {
      const user = payload;

      if (user) {
        state.isLoggedIn = user.isLoggedIn;
        state.name = user.name;
        state.email = user.email;
        state.avatar = user.avatar;
      }
    });

    builder.addMatcher(apiSlice.endpoints.logout.matchFulfilled, (state, { payload }) => {
      state.isLoggedOut = payload.isLoggedOut;
      state.isLoggedIn = false;
      state.name = null;
      state.email = null;
      state.avatar = null;
    });
  },
});

export default userSlice.reducer;

export const selectCurrentUserName = (state) => state.userConfig.name;
export const selectCurrentUserEmail = (state) => state.userConfig.email;
export const selectCurrentUserAvatar = (state) => state.userConfig.avatar;
export const selectCurrentUserLogin = (state) => state.userConfig.isLoggedIn;
export const selectCurrentUserLogout = (state) => state.userConfig.isLoggedOut;
