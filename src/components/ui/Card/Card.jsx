import CreditBox from 'components/CreditBox/CreditBox';
import SubscribeBox from 'components/SubscribeBox/SubscribeBox';
import styles from './Card.module.css';

export default function Card() {
  return (
    <aside className={styles.cardContainer}>
      <CreditBox />
      <SubscribeBox />
    </aside>
  );
}
