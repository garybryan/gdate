import SwipeControls from '../../components/swipe-controls/swipe-controls';
import SwipeQueue from '../../components/swipe-queue/swipe-queue';

import getProfileQueue from '../../queue/get-profile-queue/get-profile-queue';

import { Profile } from '../../types/profile';

import styles from './index.module.css';

interface SwipeProps {
  profileQueue: Profile[];
}

export function Swipe({ profileQueue }: SwipeProps) {
  return (
    <div className={styles['container']}>
      <SwipeQueue profileQueue={profileQueue} />
      <SwipeControls />
    </div>
  );
}

export async function getServerSideProps() {
  const profileQueue = await getProfileQueue();
  return {
    props: { profileQueue },
  };
}

export default Swipe;
