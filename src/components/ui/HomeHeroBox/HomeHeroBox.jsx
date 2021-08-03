import MainBox from '../../Boxes/MainBox/MainBox';
import DoubleBox from '../../Boxes/DoubleBox/DoubleBox';
import SqureLeftBox from '../../Boxes/SquareLeftBox/SquareLeftBox';
import SquareRightBox from '../../Boxes/SquareRightBox/SquareRightBox';
import styles from './HomeHeroBox.module.css';

// Images
import BackToSchool from '../../../../public/images/backtoschool.png';
import Console from '../../../../public/images/console.png';
import WannaPlay from '../../../../public/images/wanna-play.png';
import AirPodsMax from '../../../../public/images/airpodsmax.png';

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
      <SqureLeftBox
        image={WannaPlay}
        title="Wanna play?"
        description="#tell me more"
        alt="Back to school Ad"
      />

      <SquareRightBox
        title="Ad"
        description="see our #apple offers"
        image={AirPodsMax}
        alt="AirPods Max orange"
      />
    </section>
  );
}
