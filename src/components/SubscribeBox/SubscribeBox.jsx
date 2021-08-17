import styles from './SubscribeBox.module.css';

export default function SubscribeBox() {
  return (
    <div className={styles.subscribeContainer}>
      <h3 className={styles.subscribeTitle}>Let's stay in touch</h3>
      <div className={styles.subscribeDescription}>
        Get latest offers, exclusives & new products on email
      </div>
      <form className={styles.subscribeForm}>
        <input className={styles.subscribeInput} type="email" />
        <button className={styles.subscribeButton} type="submit">
          Subscribe
        </button>
      </form>
      <small className={styles.subscribeSmall}>You can unsubscribe any time</small>
    </div>
  );
}
