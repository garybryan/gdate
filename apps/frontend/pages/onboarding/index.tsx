import OnboardingMessage from '../../components/onboarding-message/onboarding-message';
import OnboardingForm from '../../components/onboarding-form/onboarding-form';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface OnboardingProps {}

export function Onboarding(props: OnboardingProps) {
  return (
    <>
      <OnboardingMessage />
      <OnboardingForm />
    </>
  );
}

export default Onboarding;
