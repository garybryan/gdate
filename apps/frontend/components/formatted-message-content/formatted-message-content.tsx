const HIDDEN_PLACEHOLDER_PATTERN = /(\[HIDDEN:([^\]]+)\])/;

import HiddenMessagePart from '../hidden-message-part/hidden-message-part';

interface FormattedMessageContentProps {
  children: string;
}

function replaceWithHiddenPart(placeholder: string): React.ReactNode {
  const part = placeholder.match(HIDDEN_PLACEHOLDER_PATTERN)[2];
  return <HiddenMessagePart part={part} />;
}

export function FormattedMessageContent({
  children,
}: FormattedMessageContentProps) {
  const splitText = children.split(HIDDEN_PLACEHOLDER_PATTERN);
  const nodes: React.ReactNode[] = splitText.map((text) =>
    HIDDEN_PLACEHOLDER_PATTERN.test(text) ? replaceWithHiddenPart(text) : text
  );

  return <>{nodes}</>;
}

export default FormattedMessageContent;
