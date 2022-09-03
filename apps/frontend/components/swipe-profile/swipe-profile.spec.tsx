import { render, screen } from '@testing-library/react';

import SwipeProfile from './swipe-profile';

describe('SwipeProfile', () => {
  const profile = {
    name: 'Some guy',
    photo: 'dude.jpg',
    age: 30,
  };

  beforeEach(() => {
    render(<SwipeProfile profile={profile} />);
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
