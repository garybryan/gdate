import { render, screen } from '@testing-library/react';

import Payment from './payment';

describe('Payment', () => {
  beforeEach(() => render(<Payment />));

  it('renders payment content', () => {
    expect(
      screen.getByText("Don't leave your date waiting!!")
    ).toBeInTheDocument();
  });

  it('renders payment options', () => {
    expect(screen.getByText('Weekly')).toBeInTheDocument();
  });
});
