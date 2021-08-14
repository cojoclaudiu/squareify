/* eslint-disable react/no-children-prop */
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { addToWishlist } from 'store/wishlistSlice';
import { addItemToCart } from 'store/cartSlice';
import useData from 'hooks/useData';
import priceFormat from 'utils/priceFormat';
import ReactMarkdown from 'react-markdown';
import ActionProductButton from 'components/Buttons/ActionProductButton/ActionProductButton';
import AddToButton from '../../Buttons/AddToButton/AddToButton';

import styles from './ProductPage.module.css';

export default function ItemPage() {
  const router = useRouter();
  const { i: id } = router.query;
  const { items } = useData();

  const dispatch = useDispatch();
  const itemData = items.find((item) => item.id === id);

  const productInStock = (item) =>
    item ? (
      <div className={styles.inStock}>In stock with 30 day free returns</div>
    ) : (
      <div className={styles.outOfStock}>Coming soon</div>
    );

  const editProductHandler = (item) => () =>
    router.push(`/edit-product/${item.name.replace(/ /g, '-')}?i=${item.id}`);

  const addToCartHandler = () => {
    if (itemData) {
      dispatch(
        addItemToCart({
          url: router.asPath,
          id: itemData.id,
          image: itemData.image,
          name: itemData.name,
          price: Number(itemData.price),
        }),
      );
    }
  };

  const addToWishlistHandler = () => {
    if (itemData) {
      dispatch(
        addToWishlist({
          url: router.asPath,
          id: itemData.id,
          image: itemData.image,
          name: itemData.name,
          price: Number(itemData.price),
        }),
      );
    }
  };

  return (
    <main className={styles.itemContainer}>
      {itemData === undefined ? (
        'loading'
      ) : (
        <>
          <article className={styles.productMain}>
            <h1 className={styles.productTitle}>{itemData.name}</h1>
            <ActionProductButton name="Edit" action={editProductHandler(itemData)} />

            <div className={styles.productGallery}>
              <div className={styles.mainImage}>
                <Image width={595} height={595} src={itemData.image} objectFit="contain" />
              </div>

              <div className={styles.thumbsContainer}>
                <div className={styles.thumbImage}>
                  <Image width={300} height={300} src={itemData.image} objectFit="contain" />
                </div>
                <div className={styles.thumbImage}>
                  <Image width={300} height={300} src={itemData.image} objectFit="contain" />
                </div>
                <div className={styles.thumbImage}>
                  <Image width={300} height={300} src={itemData.image} objectFit="contain" />
                </div>
                <div className={styles.thumbImage}>
                  <Image width={300} height={300} src={itemData.image} objectFit="contain" />
                </div>
              </div>
            </div>

            <div className={styles.productDescription}>
              <ReactMarkdown children={itemData.description} />
            </div>
          </article>

          <section className={styles.productSidebar}>
            <div className={styles.buttonsContainer}>
              <h2 className={styles.productPrice}>{priceFormat(itemData.price)}</h2>
              <AddToButton to="trolley" addToCart={addToCartHandler} />
              <AddToButton to="wishlist" addToWishlist={addToWishlistHandler} />
              {productInStock(itemData.inStock)}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
