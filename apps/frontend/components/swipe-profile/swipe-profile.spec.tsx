import { render, screen } from '@testing-library/react';

import SwipeProfile from './swipe-profile';

describe('SwipeProfile', () => {
  const profile = {
    name: 'Some guy',
    photo: 'dude.jpg'
  };

  beforeEach(() => render(<SwipeProfile profile={profile} />));

  it('renders name', () => {
    expect(
      screen.getByRole('heading', { name: profile.name })
    ).toBeInTheDocument();
  });

  it('renders photo', () => {
    expect(
      screen.getByAltText(`Photo of ${profile.name}`)
    ).toBeInTheDocument()
  });
});
