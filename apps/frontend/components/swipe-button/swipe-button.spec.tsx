import { render, screen } from '@testing-library/react';

import SwipeButton from './swipe-button';

describe('SwipeButton', () => {
  const content = "Yes";

  beforeEach(() => {
    render(<SwipeButton>{content}</SwipeButton>);
  });

  it('renders a button with children', () => {
    expect(
      screen.getByRole('button', {name: content})
    ).toBeInTheDocument();
  });
});
