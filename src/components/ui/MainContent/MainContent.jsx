import HomeHeroBox from '../HomeHeroBox/HomeHeroBox';
import HomeMiddleBox from '../HomeMiddleBox/HomeMiddleBox';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import CarouselItems from '../CarouselItems/CarouselItems';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <HomeHeroBox />

      <HomeMiddleBox />

      <CarouselContainer>
        <CarouselItems />
      </CarouselContainer>
    </main>
  );
}
