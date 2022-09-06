import Link from 'next/link';

import SexyButton from '../../components/sexy-button/sexy-button';

import styles from './splash.module.css';

export function Splash() {
  return (
    <div className={styles['container']}>
      <SexyButton className={styles['button']}>Log in</SexyButton>
      <Link href="/onboarding" passHref>
        <SexyButton className={styles['button']}>Sign up</SexyButton>
      </Link>
    </div>
  );
}

export default Splash;
