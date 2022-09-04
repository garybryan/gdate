import { useRouter } from 'next/router';

import LoadingMessage from '../../components/loading-message/loading-message';
import { useFakeLoading } from '../../hooks/fake-loading/fake-loading';

export function Registration() {
  const isLoading = useFakeLoading();
  const { push } = useRouter();

  if (isLoading) {
    return <LoadingMessage message="Registering your account..." />;
  }

  push('/swipe');
}

export default Registration;
