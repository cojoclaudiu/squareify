import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from 'store/cartSlice';
import EmptyCartPage from 'components/EmptyCartPage/EmptyCartPage';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import priceFormat from 'utils/priceFormat';
import styles from './Cart.module.css';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addToCartHandler = (object) => () => dispatch(addItemToCart(object));

  const removeFromCartHandler = (id) => () => dispatch(removeItemFromCart(id));

  return cartItems?.length === 0 ? (
    <EmptyCartPage />
  ) : (
    <div className={styles.cartContainer}>
      {cartItems.map((item) => (
        <div className={styles.productContainer} key={item.productId}>
          <div className={styles.productImage}>
            <Image width={150} height={150} src={item.productImage} />
          </div>
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>
              <Link href={`${item.productUrl}`}>{item.productName}</Link>
            </h3>

            <div className={styles.titlePriceContainer}>
              <h3 className={styles.secondaryHeading}>Quantity:</h3>
              <span className={styles.quantityValue}>{item.quantity}</span>
            </div>

            <div className={styles.titlePriceContainer}>
              <h3 className={styles.secondaryHeading}>Price:</h3>
              <span>{priceFormat(item.productPrice)}</span>
            </div>

            <div className={styles.titlePriceContainer}>
              <h3 className={styles.secondaryHeading}>Total price:</h3>
              <span>{priceFormat(item.totalProductPrice)}</span>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <button
              className={styles.addButton}
              type="button"
              onClick={addToCartHandler({
                id: item.productId,
                name: item.productName,
                price: item.productPrice,
              })}
            >
              <AiFillPlusSquare />
            </button>
            <button
              className={styles.removeButton}
              type="button"
              onClick={removeFromCartHandler(item.productId)}
            >
              <AiFillMinusSquare />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
