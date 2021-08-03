import Link from 'next/link';
import Image from 'next/image';
import styles from './SecondaryLftSquareBox.module.css';

export default function SecondaryLftSuqareBox({ image, alt, title, description }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.smLftTopBox}>
        <div className={styles.imageContainer}>
          <Image width={292} height={292} src={image} alt={alt} layout="intrinsic" />
        </div>
        <h3 className={styles.secondaryTitle}>{title}</h3>
        <p className={styles.secondaryDescription}>{description}</p>
      </a>
    </Link>
  );
}
