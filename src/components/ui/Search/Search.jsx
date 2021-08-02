import styles from './Search.module.css';

export default function Search() {
  return (
    <form className={styles.inputContainer}>
      <input className={styles.input} type="search" placeholder="Looking for something?" />
    </form>
  );
}
