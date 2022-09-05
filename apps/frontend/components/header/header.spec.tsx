import { render, screen } from '@testing-library/react';

import { useUser } from '../../hooks/user/user';

import Header from './header';

jest.mock('../../hooks/user/user');

const mockedUseUser = jest.mocked(useUser);

describe('Header', () => {
  const user = {
    name: 'user',
    photo: 'user.jpg',
    age: 25,
  };

  const renderComponent = () => render(<Header />);

  it('renders heading', () => {
    mockedUseUser.mockReturnValue({ user: null, setUser: jest.fn() });

    renderComponent();

    expect(
      screen.getByRole('heading', { level: 1, name: 'gdate' })
    ).toBeInTheDocument();
  });

  it('renders avatar for logged-in user', () => {
    mockedUseUser.mockReturnValue({ user, setUser: jest.fn() });

    renderComponent();

    expect(screen.getByAltText(user.name)).toBeInTheDocument();
  });
});
