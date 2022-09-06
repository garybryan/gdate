import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HiddenMessagePart from './hidden-message-part';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  // TODO this isn't working properly and the hook is returning null, although it's fine in other tests.
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('HiddenMessagePart', () => {
  const part = 'time';

  beforeEach(() => render(<HiddenMessagePart part={part} />));

  it('renders the part name in uppercase with a hidden message', () => {
    expect(screen.getByText('[ TIME HIDDEN ]')).toBeInTheDocument();
  });

  it('navigates to payment page on click', async () => {
    await userEvent.click(screen.getByText('[ TIME HIDDEN ]'));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/payment');
  });
});
