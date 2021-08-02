import Link from 'next/link';
import Image from 'next/image';
import priceFormat from '../../../../utils/priceFormat';
import styles from './Item.module.css';

export default function Item({ name, price, url = '/', image, alt }) {
  return (
    <Link href={url} passHref>
      <a href="replace" className={styles.imageContainer}>
        <div className={styles.itemImage}>
          <Image width={292.5} height={292.5} src={image} alt={alt} layout="responsive" />
        </div>
        <h2 className={styles.itemTitle}>{name}</h2>
        <div className={styles.itemPrice}>{priceFormat(price)}</div>
      </a>
    </Link>
  );
}
