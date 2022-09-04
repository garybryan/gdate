import { render, screen } from '@testing-library/react';

import Messenger from './messenger';

describe('Messenger', () => {
  const profile = {
    name: 'Some guy',
    photo: 'dude.jpg',
    age: 30,
  };
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
    render(<Messenger messages={messages} correspondent={profile} />)
  );

  it('renders all messages', () => {
    for (const message of messages) {
      expect(screen.getByText(message.content)).toBeInTheDocument();
    }
  });
});
