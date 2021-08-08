import Image from 'next/image';
import EmptyCart from '../../../public/images/empty_cart.svg';
import styles from './EmptyCartPage.module.css';

export default function EmptyCartPage() {
  return (
    <section className={styles.ecpContainer}>
      <h2 className={styles.pageTitle}>Your cart is empty, please add some products.</h2>
      <Image src={EmptyCart} width={592} height={592} alt="Empty cart ilustration" />
    </section>
  );
}
