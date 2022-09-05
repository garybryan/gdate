import { render, screen } from '@testing-library/react';

import MessageList from './message-list';

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

  beforeEach(() =>
    render(
      <MessageList
        messages={messages}
        correspondentName={correspondentName}
        correspondentPhoto={correspondentPhoto}
      />
    )
  );

  it('renders all messages', () => {
    for (const message of messages) {
      expect(screen.getByText(message.content)).toBeInTheDocument();
    }
  });
});
