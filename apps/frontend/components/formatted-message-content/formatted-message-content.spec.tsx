import { render, screen } from '@testing-library/react';

import FormattedMessageContent from './formatted-message-content';

describe('FormattedMessageContent', () => {
  const content = 'Hi [NAME HIDDEN] text [PLACE HIDDEN]';

  beforeEach(() =>
    render(<FormattedMessageContent>{content}</FormattedMessageContent>)
  );

  it('renders the plain parts of the message', () => {
    expect(screen.getByText(/Hi /)).toBeInTheDocument();
    expect(screen.getByText(/ text/)).toBeInTheDocument();
  });

  it('replaces hidden parts with hidden part nodes', () => {
    expect(screen.getByText('[ NAME HIDDEN ]')).toBeInTheDocument();
    expect(screen.getByText('[ PLACE HIDDEN ]')).toBeInTheDocument();
  });
});
