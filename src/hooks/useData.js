import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        'https://nextify31-default-rtdb.europe-west1.firebasedatabase.app/store.json',
      );
      setItems(response.data);
    };
    getItems();
  }, [setItems]);

  return { items };
};

export default useData;
