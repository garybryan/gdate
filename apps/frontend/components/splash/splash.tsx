import Link from 'next/link';

import Image from 'next/image';

import SexyButton from '../../components/sexy-button/sexy-button';

import styles from './splash.module.css';

export function Splash() {
  return (
    <div className={styles['container']}>
      <Image
        alt="Happy couple"
        src="/images/couple.jpg"
        layout="fill"
        objectFit="contain"
        priority
      />
      <SexyButton className={styles['button']}>Log in</SexyButton>
      <Link href="/onboarding" passHref>
        <SexyButton className={styles['button']}>Sign up</SexyButton>
      </Link>
    </div>
  );
}

export default Splash;
