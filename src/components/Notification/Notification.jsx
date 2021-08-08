import styles from './Notification.module.css';

export default function Notification({ color, items }) {
  return (
    items !== 0 && (
      <div className={`${styles.notification} ${styles[color]}`}>{items > 9 ? '9+' : items}</div>
    )
  );
}
