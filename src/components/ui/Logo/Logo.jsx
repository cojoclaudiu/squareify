import Link from 'next/link';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <h1 className={styles.textLogo}>
      <Link href="/">nextify </Link>
    </h1>
  );
}
