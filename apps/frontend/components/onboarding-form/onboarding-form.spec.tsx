import { render, screen } from '@testing-library/react';

import OnboardingForm from './onboarding-form';

describe('OnboardingForm', () => {
  beforeEach(() => render(<OnboardingForm />));

  it('renders interested in field', () => {
    expect(screen.getByLabelText("I'm interested in:")).toBeInTheDocument();
  });
});
