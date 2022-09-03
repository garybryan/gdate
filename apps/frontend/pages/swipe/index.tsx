import SwipeControls from '../../components/swipe-controls/swipe-controls';
import SwipeProfile from '../../components/swipe-profile/swipe-profile';

import styles from './index.module.css';

const TEST_PROFILE = {
  name: 'Gary',
  photo: 'lambo.jpg',
  age: 35,
};

export function Swipe() {
  return (
    <div className={styles['container']}>
      <SwipeProfile profile={TEST_PROFILE} />
      <SwipeControls />
    </div>
  );
}

export default Swipe;
