import { Typography } from '@mui/material';
import styles from './onboarding-message.module.css';

export function OnboardingMessage() {
  return (
    <>
      <h2>Welcome!</h2>
      <Typography className={styles['subheading']}>
        Tell us a bit about yourself...
      </Typography>
    </>
  );
}

export default OnboardingMessage;
