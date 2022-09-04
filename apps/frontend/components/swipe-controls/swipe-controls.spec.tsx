import { render, screen } from '@testing-library/react';

import SwipeControls from './swipe-controls';

describe('SwipeControls', () => {
  beforeEach(() => {
    render(<SwipeControls />);
  });

  it('renders reject button', () => {
    expect(screen.getByLabelText('Reject')).toBeInTheDocument();
  });

  it('renders like button', () => {
    expect(screen.getByLabelText('Like')).toBeInTheDocument();
  });

  it('renders super-like button', () => {
    expect(screen.getByLabelText('SuperLike')).toBeInTheDocument();
  });
});
