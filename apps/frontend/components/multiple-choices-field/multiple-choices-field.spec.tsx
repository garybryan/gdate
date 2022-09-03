import { render, screen } from '@testing-library/react';

import MultipleChoicesField from './multiple-choices-field';

describe('ChoiceField', () => {
  const label = 'When?';
  const choices = ['Today', 'Tomorrow'];

  beforeEach(() => render(<MultipleChoicesField label={label} choices={choices} />));

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
