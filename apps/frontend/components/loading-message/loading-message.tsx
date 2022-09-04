import Loading from '../../components/loading/loading';

import styles from './loading-message.module.css';

interface LoadingMessageProps {
  message: string;
}

export function LoadingMessage({ message }: LoadingMessageProps) {
  return (
    <div className={styles['container']}>
      <h2 className={styles['registering-text']}>{message}</h2>
      <Loading />
    </div>
  );
}

export default LoadingMessage;
