import EditIcon from 'components/Icons/EditIcon';
import styles from './ActionProductButton.module.css';

export default function ActionProductButton({ name, action }) {
  return (
    <button type="button" onClick={action} className={styles.actionButton}>
      <EditIcon /> {name}
    </button>
  );
}
