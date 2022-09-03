import { render, screen } from '@testing-library/react';

import ChoiceField, { Choices } from './choice-field';

describe('ChoiceField', () => {
  const label = "Give an answer";
  const choices: Choices = [
    ["yes", "Aye"],
    ["no", "Naw"],
  ];

  beforeEach(() => render(<ChoiceField label={label} choices={choices} />));

  it('renders label', () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('renders choices', () => {
    choices.forEach(([value, choiceLabel]) => {
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
      expect(screen.getByLabelText(choiceLabel)).toBeInTheDocument();
    });
  });
});
