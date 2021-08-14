import { useState, useEffect } from 'react';
import useData from 'hooks/useData';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './EditProductForm.module.css';

export default function EditProductForm() {
  const [editedItem, setEditedItem] = useState({ name: '', description: '' });

  const router = useRouter();
  const { i: id } = router.query;
  const { items } = useData();
  const itemData = items.find((item) => item.id === id);
  const index = items.findIndex((obj) => obj.id === id);

  const onUpdateHandler = (e) => {
    e.preventDefault();
    axios.patch(
      `https://nextify31-default-rtdb.europe-west1.firebasedatabase.app/store/${index}.json`,
      editedItem,
    );
  };

  useEffect(() => {
    setEditedItem({
      name: itemData?.name ?? 'loading',
      description: itemData?.description ?? 'loading',
    });
  }, [itemData]);

  return (
    <form className={styles.productContainer} onSubmit={onUpdateHandler}>
      <input
        className={styles.productName}
        type="text"
        value={editedItem.name}
        onChange={(e) => setEditedItem((prev) => ({ ...prev, name: e.target.value }))}
        name="productName"
      />
      <textarea
        id="productDescription"
        className={styles.productDescription}
        type="text"
        value={editedItem.description}
        onChange={(e) => setEditedItem((prev) => ({ ...prev, description: e.target.value }))}
        name="productDescription"
      />

      <button className={styles.updateButton} type="submit">
        Update Product
      </button>
    </form>
  );
}
