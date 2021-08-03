import Link from 'next/link';
import SecondaryLftSuqareBox from '../../Boxes/SecondaryLftSquareBox/SecondaryLftSquareBox';
import SecondaryRgtSquareBox from '../../Boxes/SecondaryRgtSquareBox/SecondaryRgtSquareBox';

import WashingMachine from '../../../../public/images/washing-machine-laundry.png';
import Fridge from '../../../../public/images/fridge-freezers.png';
import styles from './HomeMiddleBox.module.css';

export default function HomeMiddleBox() {
  return (
    <>
      <Link href="/" passHref>
        <a href="replace" className={styles.mainBox}>
          <div>Middle Mainbox</div>
        </a>
      </Link>

      <SecondaryLftSuqareBox
        image={WashingMachine}
        title="Washing Machines"
        alt="Washing Machine and laundry basket"
        description="Up to £120 off on selected products"
      />

      <SecondaryRgtSquareBox
        image={Fridge}
        title="Fridges and Freezers"
        alt="Fridges and Freezers"
        description="Save up to £300 on selected products"
      />

      <Link href="/" passHref>
        <a href="replace" className={styles.btmDoubleBox}>
          <div>bottom double box</div>
        </a>
      </Link>
    </>
  );
}
