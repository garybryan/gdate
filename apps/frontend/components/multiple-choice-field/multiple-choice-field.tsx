import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import ChoiceField, {
  BaseChoiceFieldProps,
} from '../choice-field/choice-field';

export function MultipleChoiceField(props: BaseChoiceFieldProps) {
  return (
    <ChoiceField
      {...props}
      renderChoices={(choices, labelId) => (
        <FormGroup aria-labelledby={labelId}>
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
      )}
    />
  );
}

export default MultipleChoiceField;
