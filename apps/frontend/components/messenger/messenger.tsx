import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageField from '../message-field/message-field';
import MessageList from '../message-list/message-list';

import styles from './messenger.module.css';

interface MessengerProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
  isCorrespondentTyping?: boolean;
  messages?: Message[];
  onMessageSent?: (content: string) => void;
}

export function Messenger({
  messages,
  isCorrespondentTyping = false,
  correspondentName,
  correspondentPhoto,
  onMessageSent,
}: MessengerProps) {
  const onSendMessage = (content: string) => {
    onMessageSent?.(content);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['conversation-container']}>
        <MessageList
          messages={messages}
          correspondentName={correspondentName}
          correspondentPhoto={correspondentPhoto}
          isCorrespondentTyping={isCorrespondentTyping}
        />
      </div>
      <MessageField onSendMessage={onSendMessage} />
    </div>
  );
}

export default Messenger;
