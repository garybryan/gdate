import { Profile } from '../../types/profile';
import SwipeProfile from '../swipe-profile/swipe-profile';

interface SwipeQueueProps {
  profileQueue: Profile[];
  currentProfileIndex: number;
}

export function SwipeQueue({
  profileQueue,
  currentProfileIndex,
}: SwipeQueueProps) {
  return <SwipeProfile profile={profileQueue[currentProfileIndex]} />;
}

export default SwipeQueue;
