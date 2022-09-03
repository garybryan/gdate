import styles from './onboarding-message.module.css';

export function OnboardingMessage() {
  return (
    <div className={styles['container']}>
      <h2>Welcome!</h2>
      <h3>Tell us a bit about yourself...</h3>
    </div>
  );
}

export default OnboardingMessage;
