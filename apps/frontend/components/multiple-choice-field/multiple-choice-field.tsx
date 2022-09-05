import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';

import ChoiceField, {
  BaseChoiceFieldProps,
} from '../choice-field/choice-field';

import styles from './multiple-choice-field.module.css';

export function MultipleChoiceField(props: BaseChoiceFieldProps) {
  return (
    <ChoiceField
      {...props}
      renderChoices={(choices, labelId) => (
        <FormGroup aria-labelledby={labelId} className={styles['group']}>
          {choices.map((value) => (
            <Chip
              key={value}
              label={value}
              aria-label={value}
              onDelete={() => null}
            />
          ))}
        </FormGroup>
      )}
    />
  );
}

export default MultipleChoiceField;
