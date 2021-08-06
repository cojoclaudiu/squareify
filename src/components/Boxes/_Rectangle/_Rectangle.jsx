import Image from 'next/image';
import Link from 'next/link';
import styles from './_Rectangle.module.css';

export default function Rectangle({ url = '/', position, title, description, image, alt }) {
  return (
    <Link href={url} passHref>
      <a href="replace" className={`${styles.rectangleContainer} ${styles[position]}`}>
        {image && alt && (
          <div className={styles.imageContainer}>
            <Image width={595} height={292.5} src={image} alt={alt} />
          </div>
        )}
        {title && <div className={styles.titleRectangle}>{title}</div>}
        {description && <div className={styles.descriptionRectangle}>{description}</div>}
      </a>
    </Link>
  );
}
