import Link from 'next/link';
import Image from 'next/image';
import styles from './SquareRightBox.module.css';

export default function SquareRightBox({ title, description, image, alt }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.smRgtBox}>
        <div className={styles.imageContainer}>
          <Image width={292} height={292} src={image} alt={alt} objectFit="cover" />
        </div>
        <h2 className={styles.squareTitle}>{title}</h2>
        <h2 className={styles.squareDescription}>{description}</h2>
        <div className={styles.squareButton}>Buy</div>
      </a>
    </Link>
  );
}
