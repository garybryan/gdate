import Image from 'next/image';

import { Profile } from '../../types/profile';

import styles from './swipe-profile.module.css';

interface SwipeProfileProps {
  profile: Profile;
}

export function SwipeProfile({
  profile: { name, photo, age },
}: SwipeProfileProps) {
  return (
    <section className={styles['container']}>
      <div className={styles['photoContainer']}>
        <Image
          alt={`Photo of ${name}`}
          src={`/profile-photos/${photo}`}
          layout="fill"
          objectFit="contain"
        />
        <h2 className={styles['details']}>
          {name}, {age}
        </h2>
      </div>

    </section>
  );
}

export default SwipeProfile;
