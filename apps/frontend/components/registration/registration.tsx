import { useRouter } from 'next/router';

import Loading from '../../components/loading/loading';
import { useFakeLoading } from '../../hooks/fake-loading/fake-loading';

import styles from './registration.module.css';

export function Registration() {
  const isLoading = useFakeLoading();
  const { push } = useRouter();

  if (isLoading) {
    return (
      <div className={styles['container']}>
        <p className={styles['registering-text']}>
          Registering your account...
        </p>
        <Loading />
      </div>
    );
  }

  push('/swipe');
}

export default Registration;
