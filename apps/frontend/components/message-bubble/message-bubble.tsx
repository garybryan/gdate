import styles from './message-bubble.module.css';

interface MessageBubbleProps {
  children: React.ReactNode;
  isFromUser: boolean;
  isTyping?: boolean;
}

export function MessageBubble({
  children,
  isFromUser,
  isTyping = false,
}: MessageBubbleProps) {
  return (
    <div
      className={`${styles['container']} ${
        styles[isFromUser ? 'fromUser' : 'fromCorrespondent']
      }`}
    >
      {children}
      {isTyping && (
        <span
          aria-label="User is typing…"
          data-id="typing"
          className={styles['typing']}
        ></span>
      )}
    </div>
  );
}

export default MessageBubble;
