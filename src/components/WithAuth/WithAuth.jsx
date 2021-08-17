import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectCurrentUserLogin } from 'store/userSlice';

export default function WithAuth({ children }) {
  const isLogged = useSelector(selectCurrentUserLogin);
  const router = useRouter();

  if (!isLogged) router.push('/login');

  return children;
}
