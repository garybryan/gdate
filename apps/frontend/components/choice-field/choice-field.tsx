import { useId } from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './choice-field.module.css';

type Choices = string[];

export interface BaseChoiceFieldProps {
  label: string;
  choices: Choices;
}

type ChoiceFieldProps = BaseChoiceFieldProps & {
  renderChoices: (choices: Choices, labelId: string) => React.ReactNode;
};

export function ChoiceField({
  label,
  choices,
  renderChoices,
}: ChoiceFieldProps) {
  const id = useId();

  return (
    <div className={styles['container']}>
      <FormControl>
        <FormLabel id={id} className={styles['form-label']}>
          {label}
        </FormLabel>
        {renderChoices(choices, id)}
      </FormControl>
    </div>
  );
}

export default ChoiceField;
