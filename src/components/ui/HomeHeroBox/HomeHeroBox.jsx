import Link from 'next/link';
import styles from './HomeHeroBox.module.css';

export default function HomeHeroBox() {
  return (
    <>
      <Link href="/" passHref>
        <a href="replace" className={styles.mainBox}>
          <div>Mainbox</div>
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
