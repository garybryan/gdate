import { render, screen } from '@testing-library/react';

import OnboardingForm from './onboarding-form';

describe('OnboardingForm', () => {
  beforeEach(() => render(<OnboardingForm />));

  it('renders content', () => {
    expect(screen.getByText('Form')).toBeInTheDocument();
  });
});
