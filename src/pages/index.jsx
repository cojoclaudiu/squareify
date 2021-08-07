import { useSelector } from 'react-redux';

import MainContent from '../components/ui/MainContent/MainContent';
import Card from '../components/ui/Card/Card';

export default function Home() {
  const showCart = useSelector((state) => state.showCart.isVisible);

  return (
    <>
      {showCart && 'HERE SHOULD BE THE CART COMPONENT'}
      <MainContent />
      <Card />
    </>
  );
}
