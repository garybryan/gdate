import { render, screen } from '@testing-library/react';

import SwipeQueue from './swipe-queue';

describe('SwipeQueue', () => {
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
    render(<SwipeQueue profileQueue={profileQueue} currentProfileIndex={1} />);
  });

  it('renders profile from queue corresponding to index', () => {
    expect(
      screen.getByText(profile2.name, { exact: false })
    ).toBeInTheDocument();
  });
});
