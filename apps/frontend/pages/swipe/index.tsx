import SwipeControls from '../../components/swipe-controls/swipe-controls';
import SwipeQueue from '../../components/swipe-profile/swipe-queue';

import { Profile } from '../../types/profile';

import styles from './index.module.css';

interface SwipeProps {
  profiles: Profile[];
}

export function Swipe({ profiles }: SwipeProps) {
  return (
    <div className={styles['container']}>
      <SwipeQueue profiles={profiles} />
      <SwipeControls />
    </div>
  );
}

export async function getServerSideProps() {
  const profiles = await getProfileQueue();
  return {
    props: { profiles },
  };
}

export default Swipe;
