import { render, screen } from '@testing-library/react';

import MessageBubble from './message-bubble';

describe('MessageBubble', () => {
  const children = 'Hey! 😀';

  beforeEach(() => render(<MessageBubble isFromUser={false}>{children}</MessageBubble>));

  it('renders the message', () => {
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
