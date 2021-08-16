import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useLoginWithGoogleMutation, useLogoutMutation } from 'store/apiSlice';
import {
  selectCurrentUserName,
  selectCurrentUserEmail,
  selectCurrentUserAvatar,
  selectCurrentUserLogout,
  selectCurrentUserLogin,
} from 'store/userSlice';

// loginResult, logoutResult to be added if you want to check if is loading, fullfield, rejected etc
/**
 *  const [loginMutation,] = useLoginWithGoogleMutation();
 *  const [logoutMutation, logoutResult] = useLogoutMutation();
 */

export default function Login() {
  const [loginMutation] = useLoginWithGoogleMutation();
  const [logoutMutation] = useLogoutMutation();
  const name = useSelector(selectCurrentUserName);
  const email = useSelector(selectCurrentUserEmail);
  const avatar = useSelector(selectCurrentUserAvatar);
  const login = useSelector(selectCurrentUserLogin) ?? null;
  const logout = useSelector(selectCurrentUserLogout);

  return (
    <div>
      {!login && (
        <button type="button" onClick={loginMutation}>
          Google login
        </button>
      )}

      {login && (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <Image src={avatar} width={50} height={50} alt="user avatar" />
        </>
      )}

      <hr />
      {login && !logout && (
        <button type="button" onClick={logoutMutation}>
          Google logout
        </button>
      )}
    </div>
  );
}
