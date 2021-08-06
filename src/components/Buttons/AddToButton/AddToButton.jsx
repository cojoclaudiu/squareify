import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';

import styles from './AddToButton.module.css';

export default function AddToButton({ to }) {
  return (
    <button type="button" className={`${styles.addToButton} ${styles[to]}`}>
      <div className={styles.buttonIcon}>
        {(to === 'wishlist' && <AiOutlineHeart />) || (to === 'trolley' && <GiShoppingCart />)}
      </div>
      <div>Add to {to}</div>
    </button>
  );
}
