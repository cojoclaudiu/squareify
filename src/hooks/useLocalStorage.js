import { useState, useEffect } from 'react';
import { loadCart } from 'utils/localStorage';

const useLocalStorage = () => {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  useEffect(() => {
    setLocalStorageItems(loadCart());
  }, []);

  return { localStorageItems };
};

export default useLocalStorage;
