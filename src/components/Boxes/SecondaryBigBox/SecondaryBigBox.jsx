import Link from 'next/link';
import Image from 'next/image';

import styles from './SecondaryBigBox.module.css';

export default function SecondaryBigBox({ image, alt, title, button }) {
  return (
    <div className={styles.bigBoxContainer}>
      <Link href="/" passHref>
        <a className={styles.boxImage} href="replace">
          <Image
            width={595}
            height={595}
            src={image}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            layout="intrinsic"
          />
        </a>
      </Link>
      <h2 className={styles.bigBoxTitle}>{title}</h2>
      <button type="button" className={styles.button}>
        {button}
      </button>
    </div>
  );
}
