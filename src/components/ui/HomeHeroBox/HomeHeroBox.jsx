// Components
import SquareBox from '../../Boxes/_SquareBox/_SquareBox';
import SquareHeroBox from '../../Boxes/_SquareHeroBox/_SquareHeroBox';
import Rectangle from '../../Boxes/_Rectangle/_Rectangle';

// Images
import BackToSchool from '../../../../public/images/backtoschool.png';
import Console from '../../../../public/images/console.png';
import WannaPlay from '../../../../public/images/wanna-play.png';
import AirPodsMax from '../../../../public/images/airpodsmax.png';

import styles from './HomeHeroBox.module.css';

export default function HomeHeroBox() {
  return (
    <section className={styles.sectionHero}>
      <SquareHeroBox
        position="left"
        image={BackToSchool}
        alt="Back to school banner"
        title="Are you ready?"
        description="#backtoschool"
      />

      <Rectangle
        position="secondTopLeft"
        image={Console}
        alt="Back to school Ad"
        title="Don't miss it again"
        description="#we've got more surprises for you"
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
