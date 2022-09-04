import { render, screen } from '@testing-library/react';

import Messenger from './messenger';

describe('Messenger', () => {
  const name = 'Some guy';
  const photo = 'dude.jpg';
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
    render(<Messenger messages={messages} name={name} photo={photo} />)
  );

  it('renders correspondent name', () => {
    expect(
      screen.getByRole('heading', { name: `Conversation with ${name}` })
    ).toBeInTheDocument();
  });

  it('renders messages', () => {
    for (const message of messages) {
      expect(screen.getByText(message.content)).toBeInTheDocument();
    }
  });
});
