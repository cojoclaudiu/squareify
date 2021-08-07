import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { toggleCart } from '../../../store/showCartSlice';
import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
  const router = useRouter();
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.totalCartItems);

  const toggleCartHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCart());
    router.push('/cart');
  };

  return (
    <div className={styles.headerMenu}>
      <div className={styles.account}>
        <IoPersonCircleOutline className={styles.headerIcon} />
        <div>Account</div>
      </div>

      <div className={styles.wishlist}>
        <AiOutlineHeart className={styles.headerIcon} />
        <div>Wishlist</div>
      </div>

      <button type="button" onClick={toggleCartHandler} className={styles.trolley}>
        <GiShoppingCart className={styles.headerIcon} />
        <div>Trolley</div>
        {itemsInCart !== 0 && (
          <div className={styles.notificationItems}>{itemsInCart > 10 ? '10+' : itemsInCart}</div>
        )}
      </button>
    </div>
  );
}
