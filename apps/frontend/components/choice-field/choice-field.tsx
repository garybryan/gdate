import { useId } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './choice-field.module.css';

export type ChoiceFieldChoices = Array<[string, string]>;

interface ChoiceFieldProps {
  label: string,
  choices: ChoiceFieldChoices
}

export function ChoiceField({ label, choices }: ChoiceFieldProps) {
  const id = useId();

  return (
    <div className={styles['container']}>
      <FormControl>
        <FormLabel id={id} className={styles['form-label']}>{label}</FormLabel>
        <RadioGroup
          aria-labelledby={id}
          defaultValue="women"
          name="radio-buttons-group"
        >
          {choices.map(([value, choiceLabel]) => 
            <FormControlLabel key={value} value={value} control={<Radio />} label={choiceLabel} />
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ChoiceField;
