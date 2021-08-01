import styles from './HomepageContainer.module.css';

export default function HomepageContainer({ children }) {
  return <section className={styles.homepageContainer}>{children}</section>;
}
