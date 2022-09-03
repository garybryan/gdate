import { useId } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

import styles from './multiple-choices-field.module.css';

interface MultipleChoicesFieldProps {
  label: string;
  choices: string[];
}

export function MultipleChoicesField({ label, choices }: MultipleChoicesFieldProps) {
  const id = useId();

  return (
    <div className={styles['container']}>
      <FormControl>
        <FormLabel id={id} className={styles['form-label']}>
          {label}
        </FormLabel>
        <FormGroup aria-labelledby={id}>
          {choices.map((value) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Checkbox />}
              label={value}
              checked={true}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default MultipleChoicesField;
