import { useRouter } from 'next/router';
import useData from '../../../hooks/useData';
import styles from './ProductPage.module.css';

export default function ItemPage() {
  const router = useRouter();
  const { i: id } = router.query;
  const { items } = useData();
  const itemData = items.find((item) => item.id === id);

  return (
    <div className={styles.itemPageContainer}>
      {itemData === undefined ? (
        'loading'
      ) : (
        <>
          <h1>{itemData.name}</h1>
          <div>{itemData.price}</div>
          <div>{itemData.description}</div>
        </>
      )}
    </div>
  );
}
