import MainBox from '../../Boxes/MainBox/MainBox';
import DoubleBox from '../../Boxes/DoubleBox/DoubleBox';
import styles from './HomeHeroBox.module.css';

// Images
import BackToSchool from '../../../../public/images/backtoschool.png';
import Console from '../../../../public/images/console.png';
import WannaPlay from '../../../../public/images/wanna-play.png';
import AirPodsMax from '../../../../public/images/airpodsmax.png';
import SquareBox from '../../Boxes/_SquareBox/_SquareBox';

export default function HomeHeroBox() {
  return (
    <section className={styles.sectionHero}>
      <MainBox
        image={BackToSchool}
        title="Are you ready?"
        description="#backtoschool"
        alt="Back to school Ad"
      />

      <DoubleBox
        image={Console}
        title="Don't miss it again"
        description="#we've got more surprises for you"
        alt="Back to school Ad"
      />

      <SquareBox
        position="secondBottomLeft"
        image={WannaPlay}
        alt="Image with two people playing"
        secondaryTextLeft="#tell me more"
        secondaryTextRight="Wanna play?"
      />

      <SquareBox
        position="secondBottomRight"
        label="Ad"
        title="see our #apple offers"
        image={AirPodsMax}
        alt="AirPods Max orange"
      />
    </section>
  );
}
