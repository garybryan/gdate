import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageList from '../message-list/message-list';

import styles from './messenger.module.css';

interface MessengerProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
  messages: Message[];
}

export function Messenger({
  messages,
  correspondentName,
  correspondentPhoto,
}: MessengerProps) {
  return (
    <>
      <h2 className={styles['header']}>
        Conversation with <strong>{correspondentName}</strong>
      </h2>
      <div className={styles['conversation-container']}>
        <MessageList
          messages={messages}
          correspondentName={correspondentName}
          correspondentPhoto={correspondentPhoto}
        />
      </div>
    </>
  );
}

export default Messenger;
