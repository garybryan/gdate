import CircularProgress from '@mui/material/CircularProgress';

import styles from './loading.module.css';

export function Loading() {
  return (
    <div className={styles['container']}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
