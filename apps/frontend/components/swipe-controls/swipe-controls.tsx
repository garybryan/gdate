import styles from './swipe-controls.module.css';

import SwipeButton from '../swipe-button/swipe-button';

export function SwipeControls() {
  return (
    <section className={styles['container']}>
      <SwipeButton>No</SwipeButton>
      <SwipeButton>Super</SwipeButton>
      <SwipeButton>Yes</SwipeButton>
    </section>
  );
}

export default SwipeControls;
