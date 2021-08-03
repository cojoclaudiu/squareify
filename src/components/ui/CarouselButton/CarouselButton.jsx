import styles from './CarouselButton.module.css';

export default function CarouselButton({ dispatch, icon }) {
  return (
    <button className={styles.carouselButton} type="button" onClick={dispatch}>
      {icon}
    </button>
  );
}
