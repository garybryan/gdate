import Chip from '@mui/material/Chip';

interface HiddenMessagePartProps {
  part: string;
}

export function HiddenMessagePart({ part }: HiddenMessagePartProps) {
  return <Chip label={`[${part.toUpperCase()} HIDDEN]`} />;
}

export default HiddenMessagePart;
