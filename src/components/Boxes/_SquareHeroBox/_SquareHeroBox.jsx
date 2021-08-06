import Image from 'next/image';
import Link from 'next/link';
import styles from './_SquareHeroBox.module.css';

export default function SquareHeroBox({
  url = '/',
  alt,
  image,
  title,
  description,
  button,
  position,
}) {
  return (
    <Link href={url} passHref>
      <a href="replace" className={`${styles.heroContainer} ${styles[position]}`}>
        {image && alt && (
          <div className={styles.imageContainer}>
            <Image src={image} alt={alt} width={595} height={595} />
          </div>
        )}
        {title && <h2 className={styles.titleHero}>{title}</h2>}
        {description && <span className={styles.descriptionHero}>{description}</span>}
        {button && <div className={styles.buttonHero}>{button}</div>}
      </a>
    </Link>
  );
}
