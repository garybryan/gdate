import MultipleChoiceField from '../multiple-choice-field/multiple-choice-field';
import SingleChoiceField from '../single-choice-field/single-choice-field';
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
      <SingleChoiceField
        label="I'm interested in:"
        choices={interestedInChoices}
      />
      <MultipleChoiceField label="I'm into:" choices={interestsChoices} />
      <SingleChoiceField
        label="Does pineapple belong on pizza?"
        choices={pineappleChoices}
      />
    </div>
  );
}

export default OnboardingForm;
