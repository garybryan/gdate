import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

import SwipeButton from '../swipe-button/swipe-button';

import styles from './swipe-controls.module.css';


export function SwipeControls() {
  return (
    <section className={styles['container']}>
      <SwipeButton><CloseIcon aria-label="Reject"/></SwipeButton>
      <SwipeButton><StarIcon aria-label="SuperLike"/></SwipeButton>
      <SwipeButton><CheckIcon aria-label="Like"/></SwipeButton>
    </section>
  );
}

export default SwipeControls;
