import { useRouter } from 'next/router';
import styles from './ProductPage.module.css';

export default function ItemPage() {
  const router = useRouter();
  const { i: id } = router.query;

  return <div className={styles.itemPageContainer}>{id}</div>;
}
