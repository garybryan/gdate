import CheckboxesField from '../checkboxes-field/checkboxes-field';
import ChoiceField from '../choice-field/choice-field';
import styles from './onboarding-form.module.css';

const interestedInChoices = [
  'Men',
  'Women',
  'Everybody',
  'Instagram followers',
];

const interestsChoices = [
  'True crime documentaries',
  'The Office (US version)',
  'Adventures',
];

const pineappleChoices = ['Love it! 🍍🍕🤤', 'No way! 🍍🍕🤮'];

export function OnboardingForm() {
  return (
    <div className={styles['container']}>
      <ChoiceField label="I'm interested in:" choices={interestedInChoices} />
      <CheckboxesField label="I'm into:" choices={interestsChoices} />
      <ChoiceField
        label="Does pineapple belong on pizza?"
        choices={pineappleChoices}
      />
    </div>
  );
}

export default OnboardingForm;
