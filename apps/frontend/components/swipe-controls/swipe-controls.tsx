import Image from 'next/image';

import styles from './swipe-controls.module.css';

export function SwipeControls() {
  return (
    <section className={styles['container']}>
      <button>No</button>
      <button>Super</button>
      <button>Yes</button>
    </section>
  );
}

export default SwipeControls;
