import { render, screen } from '@testing-library/react';

import TEST_USER from '../../fixtures/test-user';

import SwipeProfile from './swipe-profile';

describe('SwipeProfile', () => {
  const profile = TEST_USER;

  beforeEach(() => {
    render(<SwipeProfile {...profile} />);
  });

  it('renders name', () => {
    expect(
      screen.getByText(profile.name, { exact: false })
    ).toBeInTheDocument();
  });

  it('renders age', () => {
    expect(screen.getByText(profile.age, { exact: false })).toBeInTheDocument();
  });

  it('renders photo', () => {
    expect(screen.getByAltText(`Photo of ${profile.name}`)).toBeInTheDocument();
  });
});
