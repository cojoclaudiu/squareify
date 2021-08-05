import Link from 'next/link';
import Image from 'next/image';

import styles from './SecondaryBigBox.module.css';

export default function SecondaryBigBox({ image, alt, title, button }) {
  return (
    <Link href="/" passHref>
      <a className={styles.bigBoxContainer} href="replace">
        <div className={styles.boxImage}>
          <Image
            width={595}
            height={595}
            src={image}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <h2 className={styles.bigBoxTitle}>{title}</h2>
        <button type="button" className={styles.button}>
          {button}
        </button>
      </a>
    </Link>
  );
}
