import NavigationItems from '../../NavigationItems/NavigationItems';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.linkContainer}>
        <NavigationItems />
      </ul>
    </nav>
  );
}
