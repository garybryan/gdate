import { render, screen } from '@testing-library/react';

import HiddenMessagePart from './hidden-message-part';

describe('HiddenMessagePart', () => {
  const part = 'time';

  beforeEach(() => render(<HiddenMessagePart part={part} />));

  it('renders the part name in uppercase with a hidden message', () => {
    expect(screen.getByText('[TIME HIDDEN]')).toBeInTheDocument();
  });
});
