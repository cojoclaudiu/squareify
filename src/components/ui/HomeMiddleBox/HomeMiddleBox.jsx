import WashingMachine from '../../../../public/images/washing-machine-laundry.png';
import Fridge from '../../../../public/images/fridge-freezers.png';
import Battlefield from '../../../../public/images/battlefield-2042-banner.png';
import styles from './HomeMiddleBox.module.css';
import SquareBox from '../../Boxes/_SquareBox/_SquareBox';
import SquareHeroBox from '../../Boxes/_SquareHeroBox/_SquareHeroBox';
import Rectangle from '../../Boxes/_Rectangle/_Rectangle';

export default function HomeMiddleBox() {
  return (
    <section className={styles.sectionMiddle}>
      <SquareHeroBox
        position="right"
        title="CHANGE THE RULES OF WAR"
        image={Battlefield}
        alt="Battlefield 2042 Portal"
        button="Pre-oreder"
      />

      <SquareBox
        position="mainTopLeft"
        image={Fridge}
        alt="Fridges and Freezers"
        footerTitle="Fridges and Freezers"
        footerDescription="Save up to £300 on selected products"
      />

      <SquareBox
        position="mainTopRight"
        image={WashingMachine}
        alt="Washing Machine and laundry basket"
        footerTitle="Washing Machines"
        footerDescription="Up to £120 off on selected products"
      />

      <Rectangle position="bottomLeft" title="Box not finished" />
    </section>
  );
}
