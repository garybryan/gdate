import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TEST_USER from '../../fixtures/test-user';

import SwipeInterface from './swipe-interface';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('SwipeInterface', () => {
  const profile1 = TEST_USER;

  const profile2 = {
    ...TEST_USER,
    name: 'Cool dude',
  };

  const profileQueue = [profile1, profile2];

  beforeEach(() => {
    render(<SwipeInterface profileQueue={profileQueue} />);
  });

  it('renders first profile in queue', () => {
    expect(
      screen.getByText(profile1.name, { exact: false })
    ).toBeInTheDocument();

    expect(
      screen.queryByText(profile2.name, { exact: false })
    ).not.toBeInTheDocument();
  });

  it.each(['Reject', 'SuperLike'])(
    'goes to next profile in queue when clicking a button',
    async (label) => {
      await userEvent.click(screen.getByLabelText(label));

      expect(
        screen.queryByText(profile1.name, { exact: false })
      ).not.toBeInTheDocument();

      expect(
        screen.getByText(profile2.name, { exact: false })
      ).toBeInTheDocument();
    }
  );

  it('goes to message page for profile on like', async () => {
    const { id } = profile1;

    await userEvent.click(screen.getByLabelText('Like'));

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith(`/messages/${id}`);
  });
});
