import { useEffect } from 'react';

import TEST_USER from '../../fixtures/test-user';
import { useUser } from '../user/user';

export function useFakeUser() {
  const { setUser } = useUser();
  useEffect(() => {
    setUser(TEST_USER);
  });
}
