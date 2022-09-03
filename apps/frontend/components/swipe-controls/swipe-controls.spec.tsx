import { render, screen } from '@testing-library/react';

import SwipeControls from './swipe-controls';

describe('SwipeControls', () => {
  beforeEach(() => {
    render(<SwipeControls />);
  });

  it('renders no button', () => {
    expect(
      screen.getByRole('button', {name: 'No'})
    ).toBeInTheDocument();
  });

  it('renders yes button', () => {
    expect(
      screen.getByRole('button', {name: 'No'})
    ).toBeInTheDocument();
  });

  it('renders super-like button', () => {
    expect(
      screen.getByRole('button', {name: 'Super'})
    ).toBeInTheDocument();
  });
});
