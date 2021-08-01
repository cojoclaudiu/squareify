import styles from './Item.module.css';

export default function Item({ location }) {
  return <div className={styles.itemContainer}>Item {location}</div>;
}
