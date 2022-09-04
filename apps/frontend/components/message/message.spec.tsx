import { render, screen } from '@testing-library/react';

import Message from './message';

describe('Message', () => {
  const name = 'Some guy';
  const photo = 'dude.jpg';
  const content = 'Hi';

  beforeEach(() =>
    render(
      <Message name={name} photo={photo} isFromUser={false}>
        {content}
      </Message>
    )
  );

  it('renders the message', () => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
