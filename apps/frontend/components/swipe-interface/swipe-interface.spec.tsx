import { render, screen } from '@testing-library/react';

import SwipeInterface from './swipe-interface';

describe('SwipeInterface', () => {
  const profile = {
    name: 'Some guy',
    photo: 'dude.jpg',
    age: 30,
  };

  const profileQueue = [profile];

  beforeEach(() => {
    render(<SwipeInterface profileQueue={profileQueue} />);
  });

  it('renders first profile in queue', () => {
    expect(
      screen.getByText(profile.name, { exact: false })
    ).toBeInTheDocument();
  });
});
