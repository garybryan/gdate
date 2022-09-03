import { render, screen } from '@testing-library/react';

import MultipleChoiceField from './multiple-choice-field';

describe('MultipleChoiceField', () => {
  const label = 'When?';
  const choices = ['Today', 'Tomorrow'];

  beforeEach(() =>
    render(<MultipleChoiceField label={label} choices={choices} />)
  );

  it('renders label', () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('renders choice fields', () => {
    choices.forEach((value) => {
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
      expect(screen.getByLabelText(value)).toBeInTheDocument();
    });
  });
});
