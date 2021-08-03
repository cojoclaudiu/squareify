import Link from 'next/link';
import Image from 'next/image';
import styles from './SecondaryRgtSquareBox.module.css';

export default function SecondaryRgtSquareBox({ image, alt, title, description }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.smRgtTopBox}>
        <div className={styles.imageContainer}>
          <Image width={292} height={292} src={image} alt={alt} layout="intrinsic" />
        </div>
        <h3 className={styles.secondaryTitle}>{title}</h3>
        <p className={styles.secondaryDescription}>{description}</p>
      </a>
    </Link>
  );
}
