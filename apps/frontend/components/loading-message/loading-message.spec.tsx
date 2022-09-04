import { render, screen } from '@testing-library/react';

import LoadingMessage from './loading-message';

describe('LoadingMessage', () => {
  const message = 'Loading...';

  beforeEach(() => render(<LoadingMessage message={message} />));

  it('renders loading indicator', () => {
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders message', () => {
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
