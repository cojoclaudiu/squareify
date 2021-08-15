import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import firebase from 'firebase/app';

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    loginWithGoogle: builder.query({
      async queryFn({ username, password }) {
        try {
          const data = firebase.someLoginFunction(username, password);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { loginWithGoogle } = apiSlice;

export default apiSlice;
