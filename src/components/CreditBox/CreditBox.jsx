import styles from './CreditBox.module.css';

export default function CreditBox() {
  return (
    <div className={styles.creditBoxContainer}>
      <div>Enjoy now, pay later in 3 interest-free payments on eligible purchases.</div>
      <div>Late fees may apply. Learn more</div>
    </div>
  );
}
