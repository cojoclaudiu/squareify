import Link from 'next/link';
import Image from 'next/image';
import styles from './DoubleBox.module.css';

export default function DoubleBox({ title, description, image, alt }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.topDoubleBox}>
        <div className={styles.doubleBoxImage}>
          <Image height={292.5} width={595} src={image} alt={alt} layout="responsive" />
        </div>
        <h2 className={styles.doubleBoxTitle}>{title}</h2>
        <h2 className={styles.doubleBoxDescription}>{description}</h2>
        <div className={styles.doubleBoxButton}>Button</div>
      </a>
    </Link>
  );
}