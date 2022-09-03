import ChoiceField, { Choices } from '../choice-field/choice-field';
import styles from './onboarding-form.module.css';

const interestedInChoices: Choices = [
  ["men", "Men"],
  ["women", "Women"],
  ["anybody", "Everybody"],
  ["followers", "Instagram followers"],
]

export function OnboardingForm() {
  return (
    <div className={styles['container']}>
      <ChoiceField label="I'm interested in:" choices={interestedInChoices} />
    </div>
  );
}

export default OnboardingForm;
