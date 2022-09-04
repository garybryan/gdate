import { render, screen } from '@testing-library/react';

import { UserContext } from '../../contexts/user-context';

import Header from './header';

describe('Header', () => {
  const user = {
    name: 'user',
    photo: 'user.jpg',
    age: 25
  }

  const renderComponent = () => render(
    <UserContext.Provider value={{user, setUser: jest.fn()}}>
      <Header />
    </UserContext.Provider>
  );

  it('renders heading', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', { level: 1, name: 'gdate' })
    ).toBeInTheDocument();
  });

  it('renders avatar for logged-in user', () => {
    renderComponent();

    expect(
      screen.getByAltText(user.name)
    ).toBeInTheDocument();
  });
});
