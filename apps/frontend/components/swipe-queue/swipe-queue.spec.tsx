import { render, screen } from '@testing-library/react';

import SwipeQueue from './swipe-queue';

describe('SwipeQueue', () => {
  const profile = {
    name: 'Some guy',
    photo: 'dude.jpg',
    age: 30,
  };

  const profileQueue = [profile];

  beforeEach(() => {
    render(<SwipeQueue profileQueue={profileQueue} />);
  });

  it('renders first profile in queue', () => {
    expect(
      screen.getByText(profile.name, { exact: false })
    ).toBeInTheDocument();
  });
});
