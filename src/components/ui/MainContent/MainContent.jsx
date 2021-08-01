import HomepageContainer from '../HomepageContainer/HomepageContainer';
import HomeHeroBox from '../HomeHeroBox/HomeHeroBox';
import HomeMiddleBox from '../HomeMiddleBox/HomeMiddleBox';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <HomepageContainer>
        <HomeHeroBox />
      </HomepageContainer>

      <HomepageContainer>
        <HomeMiddleBox />
      </HomepageContainer>
    </main>
  );
}
