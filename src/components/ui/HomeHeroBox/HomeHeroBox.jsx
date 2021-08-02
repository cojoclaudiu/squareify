import Link from 'next/link';
import MainBox from '../../Boxes/MainBox/MainBox';
import DoubleBox from '../../Boxes/DoubleBox/DoubleBox';
import SqureLeftBox from '../../Boxes/SquareLeftBox/SquareLeftBox';
import styles from './HomeHeroBox.module.css';

// Images
import BackToSchool from '../../../../public/assets/homepage/backtoschool.png';
import Console from '../../../../public/assets/homepage/console.png';
import WannaPlay from '../../../../public/assets/homepage/wanna-play.png';

export default function HomeHeroBox() {
  return (
    <>
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

      <Link href="/" passHref>
        <a href="replace" className={styles.smRgtBox}>
          <div>right small box</div>
        </a>
      </Link>
    </>
  );
}
