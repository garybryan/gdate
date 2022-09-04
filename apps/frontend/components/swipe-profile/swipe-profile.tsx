import Image from 'next/image';

import { Profile } from '../../types/profile';

import styles from './swipe-profile.module.css';

export function SwipeProfile({ name, age, photo }: Profile) {
  return (
    <section className={styles['container']}>
      <Image
        alt={`Photo of ${name}`}
        src={`/profile-photos/${photo}`}
        layout="fill"
        objectFit="contain"
        priority
      />
      <h2 className={styles['details']}>
        {name}, {age}
      </h2>
    </section>
  );
}

export default SwipeProfile;
