import priceFormat from '../../../../utils/priceFormat';
import styles from './Item.module.css';

export default function Item({ name, price }) {
  return (
    <div className={styles.itemContainer}>
      <h2>{name}</h2>
      <div className={styles.itemPrice}>{priceFormat(price)}</div>
    </div>
  );
}
