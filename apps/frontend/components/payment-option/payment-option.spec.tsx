import { render, screen } from '@testing-library/react';

import PaymentOption from './payment-option';

describe('PaymentOption', () => {
  beforeEach(() => render(<PaymentOption />));

  it('renders content', () => {
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });
});
