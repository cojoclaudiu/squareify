import { useContext } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircle,
} from 'react-icons/io';
import { CarouselViewContext } from '../../../context/CarouselViewContext';
import CarouselButton from '../CarouselButton/CarouselButton';
import Item from '../Item/Item';
import itemsCarousel from '../../../data/carouselItems';

import styles from './CarouselItems.module.css';

export default function CarouselItems() {
  const { state, dispatch } = useContext(CarouselViewContext);
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
          {end < itemsCarousel.length ? (
            <CarouselButton dispatch={dispatchIncrement} icon={<IoIosArrowDroprightCircle />} />
          ) : (
            <CarouselButton icon={<IoIosCloseCircle />} />
          )}
        </div>
      </div>

      <div className={styles.itemsContainer}>
        {itemsCarousel.slice(start, end).map((item) => (
          <Item
            key={item.id}
            name={item.name}
            url={`${item.category}/${item.subCategory}/${item.name
              .replace(' ', '-')
              .toLowerCase()}`}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        ))}
      </div>
    </>
  );
}
