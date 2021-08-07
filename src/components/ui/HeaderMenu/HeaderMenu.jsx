import { useDispatch } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { toggleCart } from '../../../store/showCartSlice';
import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggleCart());
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
      </button>
    </div>
  );
}
