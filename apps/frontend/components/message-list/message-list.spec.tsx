import { render, screen } from '@testing-library/react';

import MessageList from './message-list';

describe('MessageList', () => {
  const name = 'Some guy'
  const photo = 'dude.jpg'
  const messages = [
    {
      received: true,
      content: 'Hi',
    },
    {
      received: false,
      content: "What's up",
    },
    {
      received: false,
      content: 'Second message',
    },
  ];

  beforeEach(() =>
    render(<MessageList messages={messages} name={name} photo={photo} />)
  );

  it('renders all messages', () => {
    for (const message of messages) {
      expect(screen.getByText(message.content)).toBeInTheDocument();
    }
  });
});
