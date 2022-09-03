import ChoiceField, { ChoiceFieldChoices } from '../choice-field/choice-field';
import styles from './onboarding-form.module.css';

const interestedInChoices: ChoiceFieldChoices = [
  ["men", "Men"],
  ["women", "Women"],
  ["anybody", "Everybody"],
  ["followers", "Instagram followers"],
]

const pineappleChoices: ChoiceFieldChoices = [
  ["yes", "Love it! 🍍🍕🤤"],
  ["no", "No way! 🍍🍕🤮"],
]


export function OnboardingForm() {
  return (
    <div className={styles['container']}>
      <ChoiceField label="I'm interested in:" choices={interestedInChoices} />
      <ChoiceField label="Does pineapple belong on pizza?" choices={pineappleChoices} />
    </div>
  );
}

export default OnboardingForm;
