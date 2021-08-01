import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Search />
      <HeaderMenu />
    </header>
  );
}
