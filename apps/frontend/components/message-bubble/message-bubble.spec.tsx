import { render, screen } from '@testing-library/react';

import MessageBubble from './message-bubble';

describe('MessageBubble', () => {
  const children = 'Hey! 😀';

  it('renders the message', () => {
    render(<MessageBubble isFromUser={false}>{children}</MessageBubble>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('renders typing icon if user is typing', () => {
    render(
      <MessageBubble isFromUser={false} isTyping={true}>
        {children}
      </MessageBubble>
    );
    expect(screen.getByLabelText('User is typing…')).toBeInTheDocument();
  });
});
