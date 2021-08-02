import Link from 'next/link';
import MainBox from '../../Boxes/BigBox/MainBox';
import styles from './HomeHeroBox.module.css';

// Images
import BackToSchool from '../../../../public/assets/homepage/backtoschool.png';

export default function HomeHeroBox() {
  return (
    <>
      <MainBox image={BackToSchool} title="Are you read?" description="#backtoschool" />

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
