import Link from 'next/link';
import Image from 'next/image';
import styles from './MainBox.module.css';

export default function MainBox({ image, title, description, alt }) {
  return (
    <Link href="/" passHref>
      <a href="replace" className={styles.mainBox}>
        <div className={styles.mainImage}>
          <Image
            width={595}
            height={595}
            src={image}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            layout="intrinsic"
          />
        </div>

        <h2 className={styles.mainTitle}>{title}</h2>

        <h2 className={styles.mainDescription}>{description}</h2>
      </a>
    </Link>
  );
}
