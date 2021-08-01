import styles from './CarouselButton.module.css';

export default function CarouselButton({ dispatch, direction }) {
  return (
    <button className={styles.carouselButton} type="button" onClick={dispatch}>
      {direction}
    </button>
  );
}
