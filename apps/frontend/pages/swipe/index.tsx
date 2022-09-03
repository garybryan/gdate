import SwipeProfile from '../../components/swipe-profile/swipe-profile';

import styles from './index.module.css';

const TEST_PROFILE = {
  name: 'Gary',
  photo: 'lambo.jpg'
}

export function Swipe() {
  return <div className={styles['container']}>
    <SwipeProfile profile={TEST_PROFILE} />
  </div>;
}

export default Swipe;
