import { renderHook } from '@testing-library/react-hooks';

import { useFakeLoading } from './fake-loading';

describe('useFakeLoading', () => {
  const delay = 1500;
  const render = () => renderHook(() => useFakeLoading(delay));

  beforeEach(jest.useFakeTimers);

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('returns true initially', () => {
    const { result } = render();

    expect(result.current).toBe(true);
  });

  it('returns false after loading delay', () => {
    const { result } = render();

    jest.advanceTimersByTime(delay);

    expect(result.current).toBe(false);
  });
});
