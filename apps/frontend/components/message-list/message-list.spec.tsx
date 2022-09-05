import { render, screen } from '@testing-library/react';

import { useUser } from '../../hooks/user/user';
import TEST_USER from '../../fixtures/test-user';

import MessageList from './message-list';

jest.mock('../../hooks/user/user');

const mockedUseUser = jest.mocked(useUser);

describe('MessageList', () => {
  const correspondentName = 'Some guy';
  const correspondentPhoto = 'dude.jpg';
  const messages = [
    {
      isFromUser: true,
      content: 'Hi',
    },
    {
      isFromUser: false,
      content: "What's up",
    },
    {
      isFromUser: false,
      content: 'Second message',
    },
  ];

  const renderComponent = () =>
    render(
      <MessageList
        messages={messages}
        correspondentName={correspondentName}
        correspondentPhoto={correspondentPhoto}
      />
    );

  describe('User logged in', () => {
    beforeEach(() => {
      mockedUseUser.mockReturnValue({ user: TEST_USER, setUser: jest.fn() });
      renderComponent();
    });

    it('renders all messages', () => {
      for (const message of messages) {
        expect(screen.getByText(message.content)).toBeInTheDocument();
      }
    });
  });

  describe('User not logged in', () => {
    beforeEach(() => {
      mockedUseUser.mockReturnValue({ user: null, setUser: jest.fn() });
      renderComponent();
    });

    it('does not render messages', () => {
      for (const message of messages) {
        expect(screen.queryByText(message.content)).not.toBeInTheDocument();
      }
    });
  });
});
