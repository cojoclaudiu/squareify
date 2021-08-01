import { useContext } from 'react';
import { nanoid } from 'nanoid';
import { CarouselViewContext } from '../../../context/CarouselViewContext';
import Item from '../Item/Item';

import styles from './CarouselItems.module.css';

export default function CarouselItems() {
  const { state, dispatch } = useContext(CarouselViewContext);
  const { start, end } = state;

  const itemsData = [
    <Item location={1} key={nanoid(5)} />,
    <Item location={2} key={nanoid(5)} />,
    <Item location={3} key={nanoid(5)} />,
    <Item location={4} key={nanoid(5)} />,
    <Item location={5} key={nanoid(5)} />,
    <Item location={6} key={nanoid(5)} />,
    <Item location={7} key={nanoid(5)} />,
  ];

  const dispatchIncrement = () => dispatch({ type: 'increment' });
  const dispatchDecrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <div className={styles.buttonsContainer}>
        {start > 0 && (
          <button className={styles.prevButton} type="button" onClick={dispatchDecrement}>
            Prev
          </button>
        )}
        {end < itemsData.length && (
          <button className={styles.nextButton} type="button" onClick={dispatchIncrement}>
            Next
          </button>
        )}
      </div>
      <div className={styles.itemsContainer}>{itemsData.slice(start, end)}</div>
    </>
  );
}
