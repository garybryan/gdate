import styles from './message-bubble.module.css';

interface MessageBubbleProps {
  children: React.ReactNode;
  isFromUser: boolean;
}

export function MessageBubble({ children, isFromUser }: MessageBubbleProps) {
  return (
    <div
      className={`${styles['container']} ${
        styles[isFromUser ? 'fromUser' : 'fromCorrespondent']
      }`}
    >
      {children}
    </div>
  );
}

export default MessageBubble;
