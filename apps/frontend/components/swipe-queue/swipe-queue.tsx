import { Profile } from '../../types/profile';
import SwipeProfile from '../swipe-profile/swipe-profile';

interface SwipeQueueProps {
  profileQueue: Profile[];
}

export function SwipeQueue({ profileQueue }: SwipeQueueProps) {
  return (
    <SwipeProfile profile={profileQueue[0]} />
  );
}

export default SwipeQueue;
