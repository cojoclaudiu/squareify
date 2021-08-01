import styles from './Card.module.css';

export default function Card() {
  return (
    <aside className={styles.cardContainer}>
      <div className={styles.cardItemLeft}>Enjoy now, pay later with nextify card</div>
      <div className={styles.cardItemRight}>Something else</div>
    </aside>
  );
}
