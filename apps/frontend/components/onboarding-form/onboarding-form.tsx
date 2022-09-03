import styles from './onboarding-form.module.css';

/* eslint-disable-next-line */
export interface OnboardingFormProps {}

export function OnboardingForm(props: OnboardingFormProps) {
  return (
    <div className={styles['container']}>
      <p>Form</p>
    </div>
  );
}

export default OnboardingForm;
