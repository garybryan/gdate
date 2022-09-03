import { render, screen } from '@testing-library/react';

import SingleChoiceField from './single-choice-field';

describe('SingleChoiceField', () => {
  const label = 'Geez an answer';
  const choices = ['Aye', 'Naw'];

  beforeEach(() =>
    render(<SingleChoiceField label={label} choices={choices} />)
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
