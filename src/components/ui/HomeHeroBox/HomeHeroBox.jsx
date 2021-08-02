import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeHeroBox.module.css';

// Images
import BackToSchool from '../../../../public/assets/homepage/backtoschool.png';

export default function HomeHeroBox() {
  return (
    <>
      <Link href="/" passHref>
        <a href="replace" className={styles.mainBox}>
          <div className={styles.mainImage}>
            <Image src={BackToSchool} alt="Back to school Ad" />
          </div>
          <div className={styles.mainTitleContainer}>
            <h2 className={styles.mainTitle}>Are you ready?</h2>
          </div>
          <h2 className={styles.mainDescription}>#backtoschool offers</h2>
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace" className={styles.topDoubleBox}>
          <div>top double box</div>
        </a>
      </Link>

      <Link href="/" passHref>
        <a href="replace" className={styles.smLftBox}>
          <div>left small box</div>
        </a>
      </Link>

      <Link href="/" passHref>
        <a href="replace" className={styles.smRgtBox}>
          <div>right small box</div>
        </a>
      </Link>
    </>
  );
}
