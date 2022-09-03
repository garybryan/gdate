import { render, screen } from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  const children = "Children";

  beforeEach(() => render(<Layout>{children}</Layout>));

  it('renders heading', () => {
    expect(screen.getByRole('heading', { level: 1, name: 'gdate'})).toBeInTheDocument();
  });

  it('renders children', () => {
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
