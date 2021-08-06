import Link from 'next/link';
import Image from 'next/image';
import styles from './_SquareBox.module.css';

export default function SquareBox({
  position,
  url = '/',
  image,
  alt,
  label,
  title,
  secondaryTextLeft,
  secondaryTextRight,
  footerTitle,
  footerDescription,
}) {
  return (
    <Link href={url} passHref>
      <a href="replace" className={`${styles.squareContainer} ${styles[position]}`}>
        {image && alt && (
          <div className={styles.imageContainer}>
            <Image width={292.5} height={292.5} src={image} alt={alt} />
          </div>
        )}
        {label && <span className={styles.squareLabel}>{label}</span>}
        {title && <h3 className={styles.squareTitle}>{title}</h3>}
        {secondaryTextLeft && <span className={styles.secondaryTextLeft}>{secondaryTextLeft}</span>}
        {secondaryTextRight && (
          <span className={styles.secondaryTextRight}>{secondaryTextRight}</span>
        )}
        {(footerTitle || footerDescription) && (
          <div className={styles.squareFooter}>
            <div>{footerTitle}</div>
            <div>{footerDescription}</div>
          </div>
        )}
      </a>
    </Link>
  );
}
