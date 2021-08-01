import HomepageContainer from '../ui/HomepageContainer/HomepageContainer';
import HomeHeroBox from '../ui/HomeHeroBox/HomeHeroBox';
import styles from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={styles.mainContent}>
      <HomepageContainer>
        <HomeHeroBox />
      </HomepageContainer>
    </main>
  );
}
