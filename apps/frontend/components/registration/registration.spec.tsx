import { render, screen } from '@testing-library/react';
import { useFakeLoading } from '../../hooks/fake-loading/fake-loading';

import Registration from './registration';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('../../hooks/fake-loading/fake-loading');

const mockedUseFakeLoading = jest.mocked(useFakeLoading);

describe('Registration', () => {
  const renderComponent = () => render(<Registration />);

  it('renders loading indicator when loading', () => {
    mockedUseFakeLoading.mockReturnValue(true);

    renderComponent();

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('redirects to swipe page when loaded', () => {
    mockedUseFakeLoading.mockReturnValue(false);

    renderComponent();

    expect(mockPush).toHaveBeenCalledWith('/swipe');
    expect(mockPush).toHaveBeenCalledTimes(1);
  });
});
