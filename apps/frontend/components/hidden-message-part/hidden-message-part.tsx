import { useRouter } from 'next/router';

import Chip from '@mui/material/Chip';

import styles from './hidden-message-part.module.css';

interface HiddenMessagePartProps {
  part: string;
}

export function HiddenMessagePart({ part }: HiddenMessagePartProps) {
  const { push } = useRouter();

  const handleClick = () => {
    push('/payment');
  };

  return (
    <Chip
      label={`[ ${part.toUpperCase()} HIDDEN ]`}
      onClick={handleClick}
      className={styles['part']}
    />
  );
}

export default HiddenMessagePart;
