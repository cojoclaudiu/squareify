import styles from './HomeMiddleBox.module.css';

export default function HomeMiddleBox() {
  return (
    <>
      <div className={styles.mainBox}>Middle Mainbox</div>
      <div className={styles.smLftTopBox}>left top small box</div>
      <div className={styles.smRgtTopBox}>right top small box</div>
      <div className={styles.btmDoubleBox}>bottom double box</div>
    </>
  );
}
