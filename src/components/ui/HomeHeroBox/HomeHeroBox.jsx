import styles from './HomeHeroBox.module.css';

export default function HomeHeroBox() {
  return (
    <>
      <div className={styles.mainBox}>Mainbox</div>
      <div className={styles.topDoubleBox}>top double box</div>
      <div className={styles.smLftBox}>left small box</div>
      <div className={styles.smRgtBox}>right small box</div>
    </>
  );
}
