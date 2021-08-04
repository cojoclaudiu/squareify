import { nanoid } from 'nanoid';
import Link from 'next/link';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  const categories = [
    {
      id: nanoid(4),
      name: 'Computer Accessories',
      url: '/browse/computer-accesories',
    },
    {
      id: nanoid(4),
      name: 'Home & Furniture',
      url: '/browse/home-and-furniture',
    },

    {
      id: nanoid(4),
      name: 'Toys',
      url: '/browse/toys',
    },
    {
      id: nanoid(4),
      name: 'Computer Accessories',
      url: '/browse/computer-accesories',
    },

    {
      id: nanoid(4),
      name: 'Gaming',
      url: '/browse/gaming',
    },

    {
      id: nanoid(4),
      name: 'Cameras',
      url: '/browse/cameras',
    },
  ];

  return categories.map((item) => (
    <li key={item.id} className={styles.link}>
      <Link href={item.url}>{item.name}</Link>
    </li>
  ));
}
