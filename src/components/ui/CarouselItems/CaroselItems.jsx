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
    {
      id: nanoid(5),
      name: 'Dyson V11 Absolute',
      image: '/assets/carousel/dysonv11.png',
      url: '/',
      price: '599.99',
    },
    {
      id: nanoid(5),
      name: 'Aeron Office Chair',
      image: '/assets/carousel/herman-miller.png',
      url: '/',
      price: '1112',
    },
    {
      id: nanoid(5),
      name: 'HomePod mini',
      image: '/assets/carousel/homepod-mini.png',
      url: '/',
      price: '99',
    },
    {
      id: nanoid(5),
      name: 'iPad Air',
      image: '/assets/carousel/ipad-air.png',
      url: '/',
      price: '579',
    },
    {
      id: nanoid(5),
      name: 'iPhone 12 ',
      image: '/assets/carousel/iphone12-purple.png',
      url: '/',
      price: '849',
    },
    {
      id: nanoid(5),
      name: 'MacBook Air',
      image: '/assets/carousel/macbook-air.png',
      url: '/',
      price: '999',
    },
    {
      id: nanoid(5),
      name: 'MX MASTER 3',
      image: '/assets/carousel/mx-3.png',
      url: '/',
      price: '99.99',
    },
    {
      id: nanoid(5),
      name: 'Ratchet & Clank: Rift Apart',
      image: '/assets/carousel/ratchet-clank.png',
      url: '/',
      price: '69.99',
    },
    {
      id: nanoid(5),
      name: 'GEFORCE RTX 3090 ',
      image: '/assets/carousel/rtx-3090.png',
      url: '/',
      price: '1399',
    },
    {
      id: nanoid(5),
      name: 'Xbox Series X',
      image: '/assets/carousel/xbox-x.png',
      url: '/',
      price: '449.99',
    },
  ];

  const dispatchIncrement = () => dispatch({ type: 'increment' });
  const dispatchDecrement = () => dispatch({ type: 'decrement' });

  return (
    <>
      <div className={styles.trendingContainer}>
        <h3>Trending</h3>
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
      </div>

      <div className={styles.itemsContainer}>
        {itemsData.slice(start, end).map((item) => (
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
