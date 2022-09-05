import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UserProvider } from '../../contexts/user-context';

import { useUser } from '../../hooks/user/user';
import TEST_USER from '../../fixtures/test-user';

import Messenger from './messenger';

jest.mock('../../hooks/user/user');

const mockedUseUser = jest.mocked(useUser);

describe('Messenger', () => {
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

  beforeEach(() => {
    mockedUseUser.mockReturnValue({ user: TEST_USER, setUser: jest.fn() });
    render(
      <UserProvider>
        <Messenger
          messages={messages}
          correspondentName={correspondentName}
          correspondentPhoto={correspondentPhoto}
        />
      </UserProvider>
    );
  });

  it('renders correspondent name', () => {
    expect(
      screen.getByRole('heading', {
        name: `Conversation with ${correspondentName}`,
      })
    ).toBeInTheDocument();
  });

  it('renders messages', () => {
    for (const message of messages) {
      expect(screen.getByText(message.content)).toBeInTheDocument();
    }
  });

  it('can send a message', async () => {
    const messageField = screen.getByRole('textbox');
    const messageSendButton = screen.getByRole('button', { name: 'Send'});
    const message = "Hello there!";

    await userEvent.type(messageField, message);
    await userEvent.click(messageSendButton);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
