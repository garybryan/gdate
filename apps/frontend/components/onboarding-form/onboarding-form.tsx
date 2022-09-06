import { useRouter } from 'next/router';

import MultipleChoiceField from '../multiple-choice-field/multiple-choice-field';
import SingleChoiceField from '../single-choice-field/single-choice-field';

import SexyButton from '../sexy-button/sexy-button';

import styles from './onboarding-form.module.css';

const interestedInChoices = [
  'Men',
  'Women',
  'Everybody',
  'Instagram followers',
];

const interestsChoices = [
  'Adventures',
  'The Office (US version)',
  'True crime documentaries',
];

const pineappleChoices = ['Love it! 🍍🍕🤤', 'No way! 🍍🍕🤮'];

export function OnboardingForm() {
  const { push } = useRouter();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    push('/registration');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <SingleChoiceField
          label="I'm interested in:"
          choices={interestedInChoices}
        />

        <MultipleChoiceField label="I like:" choices={interestsChoices} />

        <SingleChoiceField
          label="Does pineapple belong on pizza?"
          choices={pineappleChoices}
        />

        <div className={styles['buttonContainer']}>
          <SexyButton
            variant="contained"
            size="large"
            className={styles['signupButton']}
            type="submit"
          >
            Sign me up!
          </SexyButton>
        </div>
      </form>
    </section>
  );
}

export default OnboardingForm;
