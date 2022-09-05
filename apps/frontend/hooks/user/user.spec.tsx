import { renderHook } from '@testing-library/react-hooks';

import { useUser } from './user';

describe('useUser', () => {
  it('throws error if not used in context', () => {
    const { result } = renderHook(useUser);

    expect(result.error.message).toBe(
      'useUser must be used within a UserProvider'
    );
  });
});
