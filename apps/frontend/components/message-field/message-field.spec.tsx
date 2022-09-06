import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MessageField from './message-field';

jest.mock('../../hooks/user/user');

describe('MessageField', () => {
  const onSendMessage = jest.fn();

  beforeEach(() => render(<MessageField onSendMessage={onSendMessage} />));

  afterEach(jest.clearAllMocks);

  it('calls message send function with trimmed message and clears message', async () => {
    const field = screen.getByPlaceholderText('Send a message…');
    const sendButton = screen.getByRole('button', { name: 'Send' });

    await userEvent.type(field, '  Hey there! ');
    await userEvent.click(sendButton);

    expect(onSendMessage).toHaveBeenCalledTimes(1);
    expect(onSendMessage).toHaveBeenCalledWith('Hey there!');

    expect(field).toHaveValue('');
  });

  it("doesn't send message with only whitespace", async () => {
    const field = screen.getByPlaceholderText('Send a message…');
    const sendButton = screen.getByRole('button', { name: 'Send' });

    await userEvent.type(field, '   ');
    await userEvent.click(sendButton);

    expect(onSendMessage).not.toHaveBeenCalled();

    expect(field).toHaveValue('');
  });

  it("doesn't send empty message", async () => {
    const sendButton = screen.getByRole('button', { name: 'Send' });

    await userEvent.click(sendButton);

    expect(onSendMessage).not.toHaveBeenCalled();
  });

  it('focuses input on load', async () => {
    const field = screen.getByPlaceholderText('Send a message…');

    expect(field).toHaveFocus();
  });
});
