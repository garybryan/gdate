import Image from 'next/image'

import styles from './swipe-profile.module.css';

interface Profile {
  name: string
  photo: string
}

interface SwipeProfileProps {
  profile: Profile
}

export function SwipeProfile({ profile: { name, photo } }: SwipeProfileProps) {
  return (
    <section className={styles['container']}>
      <h2>{name}</h2>
      <div className={styles['photoContainer']}>
        <Image alt={`Photo of ${name}`} src={`/profile-photos/${photo}`} layout="fill" />
      </div>
    </section>
  );
}

export default SwipeProfile;
