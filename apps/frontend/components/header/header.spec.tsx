import { render, screen } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  beforeEach(() => render(<Header />));

  it('renders heading', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: 'gdate' })
    ).toBeInTheDocument();
  });
});
