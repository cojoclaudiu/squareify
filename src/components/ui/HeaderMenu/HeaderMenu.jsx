import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';
import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
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
      <div className={styles.trolley}>
        <GiShoppingCart className={styles.headerIcon} />
        <div>Trolley</div>
      </div>
    </div>
  );
}
