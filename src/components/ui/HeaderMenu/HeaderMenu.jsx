import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Notification from 'components/Notification/Notification';
import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
  const router = useRouter();
  const itemsInCart = useSelector((state) => state.cart.totalCartItems ?? 0);

  const wishListItems = useSelector((state) => state.wishlist.totalWishes ?? 0);

  const toggleCartHandler = (e) => {
    e.preventDefault();
    router.push('/cart');
  };

  const handleAccount = (e) => {
    e.preventDefault();
    router.push('/login');
  };

  return (
    <div className={styles.headerMenu}>
      <button onClick={handleAccount} type="button" className={styles.account}>
        <IoPersonCircleOutline className={styles.headerIcon} />
        <div>Account</div>
      </button>

      <div className={styles.wishlist}>
        <AiOutlineHeart className={styles.headerIcon} />
        <div>Wishlist</div>
        <Notification color="pink" items={wishListItems} />
      </div>

      <button type="button" onClick={toggleCartHandler} className={styles.trolley}>
        <GiShoppingCart className={styles.headerIcon} />
        <div>Trolley</div>
        <Notification color="blue" items={itemsInCart} />
      </button>
    </div>
  );
}
