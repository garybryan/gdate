import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SwipeInterface from './swipe-interface';

describe('SwipeInterface', () => {
  const profile1 = {
    name: 'Some guy',
    photo: 'dude.jpg',
    age: 30,
  };

  const profile2 = {
    name: 'Your dream date',
    photo: 'nobody.jpg',
    age: 28,
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

  it.each(['Reject', 'Like', 'SuperLike'])(
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
});
