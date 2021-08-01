import Link from 'next/link';
import styles from './HomeMiddleBox.module.css';

export default function HomeMiddleBox() {
  return (
    <>
      <Link href="/" passHref>
        <a href="replace" className={styles.mainBox}>
          <div>Middle Mainbox</div>
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace" className={styles.smLftTopBox}>
          <div>left top small box</div>
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace" className={styles.smRgtTopBox}>
          <div>right top small box</div>
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace" className={styles.btmDoubleBox}>
          <div>bottom double box</div>
        </a>
      </Link>
    </>
  );
}
