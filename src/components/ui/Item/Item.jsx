import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import priceFormat from '../../../utils/priceFormat';
import styles from './Item.module.css';

export default function Item({ name, price, url = '/', image, alt }) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.wishlistIcon}>
        <AiOutlineHeart />
      </div>

      <Link href={url} passHref scroll>
        <a className={styles.linkImage} href="replace">
          <div className={styles.itemImage}>
            <Image width={292} height={292} src={image} alt={alt} objectFit="contain" />
          </div>
        </a>
      </Link>
      <h2 className={styles.itemTitle}>{name}</h2>
      <div className={styles.itemPrice}>{priceFormat(price)}</div>
    </div>
  );
}
