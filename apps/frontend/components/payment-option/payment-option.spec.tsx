import { render, screen } from '@testing-library/react';

import PaymentOption from './payment-option';

describe('PaymentOption', () => {
  const name = 'Basic';
  const price = '24.99';
  const period = 'week';

  beforeEach(() =>
    render(<PaymentOption name={name} price={price} period={period} />)
  );

  it('renders name', () => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('renders price', () => {
    expect(screen.getByText(`$${price}`)).toBeInTheDocument();
  });

  it('renders period', () => {
    expect(screen.getByText(`per ${period}`)).toBeInTheDocument();
  });
});
