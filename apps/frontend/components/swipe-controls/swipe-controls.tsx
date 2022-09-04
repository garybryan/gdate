import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

import SwipeButton from '../swipe-button/swipe-button';

import styles from './swipe-controls.module.css';

interface SwipeControlsProps {
  onReject: () => void;
  onLike: () => void;
  onSuperLike: () => void;
}

export function SwipeControls({
  onReject,
  onLike,
  onSuperLike,
}: SwipeControlsProps) {
  return (
    <section className={styles['container']}>
      <SwipeButton onClick={() => onReject()}>
        <CloseIcon
          aria-label="Reject"
          className={styles['rejectButton']}
          fontSize="inherit"
        />
      </SwipeButton>

      <SwipeButton onClick={() => onSuperLike()}>
        <StarIcon
          aria-label="SuperLike"
          className={styles['superLikeButton']}
          fontSize="inherit"
        />
      </SwipeButton>

      <SwipeButton onClick={() => onLike()}>
        <CheckIcon
          aria-label="Like"
          className={styles['likeButton']}
          fontSize="inherit"
        />
      </SwipeButton>
    </section>
  );
}

export default SwipeControls;
