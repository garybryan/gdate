import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SwipeControls from './swipe-controls';

describe('SwipeControls', () => {
  // Click events aren't triggered when calling userEvent directly.
  const user = userEvent.setup();

  const onReject = jest.fn();
  const onLike = jest.fn();
  const onSuperLike = jest.fn();

  beforeEach(() => {
    render(
      <SwipeControls
        onReject={onReject}
        onSuperLike={onSuperLike}
        onLike={onLike}
      />
    );
  });

  afterEach(jest.clearAllMocks);

  it('handles reject button click', async () => {
    await user.click(screen.getByLabelText('Reject'));

    expect(onReject).toHaveBeenCalledWith();
    expect(onReject).toHaveBeenCalledTimes(1);
  });

  it('handles like button click', async () => {
    await user.click(screen.getByLabelText('Like'));

    expect(onLike).toHaveBeenCalledWith();
    expect(onLike).toHaveBeenCalledTimes(1);
  });

  it('handles super-like button click', async () => {
    await user.click(screen.getByLabelText('SuperLike'));

    expect(onSuperLike).toHaveBeenCalledWith();
    expect(onSuperLike).toHaveBeenCalledTimes(1);
  });
});
