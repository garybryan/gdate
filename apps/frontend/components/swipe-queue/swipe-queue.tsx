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
  return <SwipeProfile {...profileQueue[currentProfileIndex]} />;
}

export default SwipeQueue;
