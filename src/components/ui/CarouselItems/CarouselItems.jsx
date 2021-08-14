import { useContext } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircle,
} from 'react-icons/io';
import { CarouselViewContext } from 'context/CarouselViewContext';
import urlProduct from 'utils/urlProduct';
import CarouselButton from '../CarouselButton/CarouselButton';
import Item from '../Item/Item';

import styles from './CarouselItems.module.css';

export default function CarouselItems() {
  const { state, dispatch, items } = useContext(CarouselViewContext);
  const { start, end } = state;

  const dispatchIncrement = () => dispatch({ type: 'increment' });
  const dispatchDecrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <div className={styles.trendingContainer}>
        <h3 className={styles.trending}>Trending</h3>
        <div className={styles.buttonsContainer}>
          {start > 0 ? (
            <CarouselButton dispatch={dispatchDecrement} icon={<IoIosArrowDropleftCircle />} />
          ) : (
            <CarouselButton icon={<IoIosCloseCircle />} />
          )}
          {end < items.length ? (
            <CarouselButton dispatch={dispatchIncrement} icon={<IoIosArrowDroprightCircle />} />
          ) : (
            <CarouselButton icon={<IoIosCloseCircle />} />
          )}
        </div>
      </div>

      <div className={styles.itemsContainer}>
        {items?.slice(start, end > items.length ? 10 : end).map((item) => (
          <Item
            key={item.id}
            name={item.name}
            url={urlProduct(item)}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        ))}
      </div>
    </>
  );
}
