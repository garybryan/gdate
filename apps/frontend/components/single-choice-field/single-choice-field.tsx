import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import ChoiceField, {
  BaseChoiceFieldProps,
} from '../choice-field/choice-field';

export function SingleChoiceField(props: BaseChoiceFieldProps) {
  return (
    <ChoiceField
      {...props}
      renderChoices={(choices, labelId) => (
        <RadioGroup
          aria-labelledby={labelId}
          defaultValue="women"
          name="radio-buttons-group"
        >
          {choices.map((value) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
}

export default SingleChoiceField;
