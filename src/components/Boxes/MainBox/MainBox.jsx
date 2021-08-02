import Link from 'next/link';
import Image from 'next/image';
import styles from './MainBox.module.css';

export default function MainBox({ image, title, description, alt }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.mainBox}>
        <div className={styles.mainImage}>
          <Image height={595} width={595} src={image} alt={alt} layout="responsive" />
        </div>

        <h2 className={styles.mainTitle}>{title}</h2>

        <h2 className={styles.mainDescription}>{description}</h2>
      </a>
    </Link>
  );
}
