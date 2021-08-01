import CarouselViewProvider from '../../../context/CarouselViewContext';

import styles from './CarouselContainer.module.css';

export default function CarouselContainer({ children }) {
  return (
    <CarouselViewProvider>
      <section className={styles.carouselContainer}>{children}</section>
    </CarouselViewProvider>
  );
}
