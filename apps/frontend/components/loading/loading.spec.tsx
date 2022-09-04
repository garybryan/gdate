import { render, screen } from '@testing-library/react';

import Loading from './loading';

describe('Loading', () => {
  beforeEach(() => render(<Loading />));

  it('renders progress indicator', () => {
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
