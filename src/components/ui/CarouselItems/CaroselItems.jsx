import { useContext } from 'react';
import { nanoid } from 'nanoid';
import { CarouselViewContext } from '../../../context/CarouselViewContext';
import CarouselButton from '../CarouselButton/CarouselButton';
import Item from '../Item/Item';

import styles from './CarouselItems.module.css';

export default function CarouselItems() {
  const { state, dispatch } = useContext(CarouselViewContext);
  const { start, end } = state;

  const itemsData = [
    { id: nanoid(5), name: 'Item 1', url: '/', price: '20' },
    { id: nanoid(5), name: 'Item 2', url: '/', price: '19.99' },
    { id: nanoid(5), name: 'Item 3', url: '/', price: '5.5' },
    { id: nanoid(5), name: 'Item 4', url: '/', price: '5' },
    { id: nanoid(5), name: 'Item 5', url: '/', price: '20' },
    { id: nanoid(5), name: 'Item 5', url: '/', price: '222' },
    { id: nanoid(5), name: 'Item 6', url: '/', price: '231' },
    { id: nanoid(5), name: 'Item 7', url: '/', price: '120' },
    { id: nanoid(5), name: 'Item 8', url: '/', price: '320' },
    { id: nanoid(5), name: 'Item 9', url: '/', price: '120' },
    { id: nanoid(5), name: 'Item 10', url: '/', price: '320' },
  ];

  const dispatchIncrement = () => dispatch({ type: 'increment' });
  const dispatchDecrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <div className={styles.buttonsContainer}>
        {start > 0 ? (
          <CarouselButton dispatch={dispatchDecrement} direction="Prev" />
        ) : (
          <CarouselButton direction="Disabled" />
        )}
        {end < itemsData.length ? (
          <CarouselButton dispatch={dispatchIncrement} direction="Next" />
        ) : (
          <CarouselButton direction="Disabled" />
        )}
      </div>
      <div className={styles.itemsContainer}>
        {itemsData.slice(start, end).map((item) => (
          <>
            <Item key={item.id} name={item.name} price={item.price} />
          </>
        ))}
      </div>
    </>
  );
}
