import Link from 'next/link';
import priceFormat from '../../../../utils/priceFormat';
import styles from './Item.module.css';

export default function Item({ name, price, url = '/' }) {
  return (
    <Link href={url} passHref>
      <a href="replace" className={styles.itemContainer}>
        <h2>{name}</h2>
        <div className={styles.itemPrice}>{priceFormat(price)}</div>
      </a>
    </Link>
  );
}
