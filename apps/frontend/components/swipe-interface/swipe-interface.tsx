import { useState } from 'react';

import SwipeControls from '../../components/swipe-controls/swipe-controls';
import SwipeQueue from '../../components/swipe-queue/swipe-queue';

import { Profile } from '../../types/profile';

import styles from './swipe-interface.module.css';

interface SwipeProps {
  profileQueue: Profile[];
}

export function SwipeInterface({ profileQueue }: SwipeProps) {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const goToNextProfile = () => {
    if (currentProfileIndex < profileQueue.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  return (
    <div className={styles['container']}>
      <SwipeQueue
        profileQueue={profileQueue}
        currentProfileIndex={currentProfileIndex}
      />
      <SwipeControls
        onReject={goToNextProfile}
        onLike={goToNextProfile}
        onSuperLike={goToNextProfile}
      />
    </div>
  );
}

export default SwipeInterface;
