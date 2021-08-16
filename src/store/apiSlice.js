import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation({
      async queryFn() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
          const result = await signInWithPopup(auth, provider);
          const { user } = result;
          return {
            data: {
              isLoggedIn: true,
              name: user.displayName,
              email: user.email,
              avatar: user.photoURL,
            },
          };
        } catch (err) {
          return {
            error: err.message,
          };
        }
      },
    }),

    logout: builder.mutation({
      async queryFn() {
        const auth = getAuth();

        try {
          await signOut(auth);

          return {
            data: { isLoggedOut: true },
          };
        } catch (err) {
          return {
            error: 'Logout: something went wrong!',
          };
        }
      },
    }),
  }),
});

export const { useLoginWithGoogleMutation, useLogoutMutation } = apiSlice;

export default apiSlice;
