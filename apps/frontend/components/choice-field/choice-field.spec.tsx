import { render, screen } from '@testing-library/react';

import ChoiceField, { Choices } from './choice-field';

describe('ChoiceField', () => {
  const label = 'Geez an answer';
  const choices = ['Aye', 'Naw'];

  const renderChoices = (choices: Choices, labelId: string) => (
    <div aria-labelledby={labelId}>
      {choices.map((choice: string) => (
        <span key={choice}>choice: {choice}</span>
      ))}
    </div>
  );

  beforeEach(() =>
    render(
      <ChoiceField
        label={label}
        choices={choices}
        renderChoices={renderChoices}
      />
    )
  );

  it('renders label', () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('renders choices', () => {
    choices.forEach((value) => {
      expect(screen.getByText(`choice: ${value}`)).toBeInTheDocument();
    });
  });
});
