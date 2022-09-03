import { render, screen } from '@testing-library/react';

import ChoiceField from './choice-field';

describe('ChoiceField', () => {
  const label = 'Geez an answer';
  const choices = ['Aye', 'Naw'];

  beforeEach(() => render(<ChoiceField label={label} choices={choices} />));

  it('renders label', () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('renders choices', () => {
    choices.forEach((value) => {
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
      expect(screen.getByLabelText(value)).toBeInTheDocument();
    });
  });
});
