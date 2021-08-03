import { useContext } from 'react';
import { nanoid } from 'nanoid';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircle,
} from 'react-icons/io';
import { CarouselViewContext } from '../../../context/CarouselViewContext';
import CarouselButton from '../CarouselButton/CarouselButton';
import Item from '../Item/Item';
import useWidth from '../../../hooks/useWidth';

import styles from './CarouselItems.module.css';

export default function CarouselItems() {
  const { state, dispatch } = useContext(CarouselViewContext);
  const { start, end } = state;
  const amountOfItems = useWidth() > 1240 ? end : 3;

  const itemsData = [
    {
      id: nanoid(5),
      name: 'Dyson V11 Absolute',
      image: '/images/dysonv11.png',
      url: '/',
      price: '599.99',
    },
    {
      id: nanoid(5),
      name: 'Aeron Office Chair',
      image: '/images/herman-miller.png',
      url: '/',
      price: '1112',
    },
    {
      id: nanoid(5),
      name: 'HomePod mini',
      image: '/images/homepod-mini.png',
      url: '/',
      price: '99',
    },
    {
      id: nanoid(5),
      name: 'iPad Air',
      image: '/images/ipad-air.png',
      url: '/',
      price: '579',
    },
    {
      id: nanoid(5),
      name: 'iPhone 12 ',
      image: '/images/iphone12-purple.png',
      url: '/',
      price: '849',
    },
    {
      id: nanoid(5),
      name: 'MacBook Air',
      image: '/images/macbook-air.png',
      url: '/',
      price: '999',
    },
    {
      id: nanoid(5),
      name: 'MX MASTER 3',
      image: '/images/mx-3.png',
      url: '/',
      price: '99.99',
    },
    {
      id: nanoid(5),
      name: 'Ratchet & Clank: Rift Apart',
      image: '/images/ratchet-clank.png',
      url: '/',
      price: '69.99',
    },
    {
      id: nanoid(5),
      name: 'GEFORCE RTX 3090 ',
      image: '/images/rtx-3090.png',
      url: '/',
      price: '1399',
    },
    {
      id: nanoid(5),
      name: 'Xbox Series X',
      image: '/images/xbox-x.png',
      url: '/',
      price: '449.99',
    },
  ];

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
          {end < itemsData.length ? (
            <CarouselButton dispatch={dispatchIncrement} icon={<IoIosArrowDroprightCircle />} />
          ) : (
            <CarouselButton icon={<IoIosCloseCircle />} />
          )}
        </div>
      </div>

      <div className={styles.itemsContainer}>
        {itemsData.slice(start, amountOfItems).map((item) => (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            alt={item.title}
          />
        ))}
      </div>
    </>
  );
}
