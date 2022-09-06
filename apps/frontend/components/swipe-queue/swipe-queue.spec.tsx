import { render, screen } from '@testing-library/react';

import TEST_USER from '../../fixtures/test-user';

import SwipeQueue from './swipe-queue';

describe('SwipeQueue', () => {
  const profile1 = TEST_USER;

  const profile2 = {
    ...TEST_USER,
    name: 'Cool dude'
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
