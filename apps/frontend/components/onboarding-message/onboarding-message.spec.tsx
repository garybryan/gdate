import { render, screen } from '@testing-library/react';

import OnboardingMessage from './onboarding-message';

describe('OnboardingMessage', () => {
  beforeEach(() => render(<OnboardingMessage />));

  it('renders welcome message', () => {
    expect(
      screen.getByRole('heading', { name: 'Welcome!' })
    ).toBeInTheDocument();
  });
});
