import Image from 'next/image';

import styles from './swipe-profile.module.css';

interface Profile {
  name: string;
  photo: string;
  age: number;
}

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
      </div>

      <h2 className={styles['details']}>
        {name}, {age}
      </h2>
    </section>
  );
}

export default SwipeProfile;
