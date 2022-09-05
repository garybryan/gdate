import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OnboardingForm from './onboarding-form';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('OnboardingForm', () => {
  beforeEach(() => render(<OnboardingForm />));

  it('renders interested in field', () => {
    expect(screen.getByLabelText("I'm interested in:")).toBeInTheDocument();
  });

  it('renders interests field', () => {
    expect(screen.getByLabelText("I like:")).toBeInTheDocument();
  });

  it('renders pineapple field', () => {
    expect(
      screen.getByLabelText('Does pineapple belong on pizza?')
    ).toBeInTheDocument();
  });

  it('goes to registration page on submit', async () => {
    await userEvent.click(screen.getByText('Sign me up!'));

    expect(mockPush).toHaveBeenCalledWith('/registration');
    expect(mockPush).toHaveBeenCalledTimes(1);
  });
});
