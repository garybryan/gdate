import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageList from '../message-list/message-list';

import styles from './messenger.module.css';

interface MessengerProps {
  name: Profile['name'];
  photo: Profile['photo'];
  messages: Message[];
}

export function Messenger({ messages, name, photo }: MessengerProps) {
  return (
    <>
      <h2 className={styles['header']}>
        Conversation with <strong>{name}</strong>
      </h2>
      <div className={styles['conversation-container']}>
        <MessageList messages={messages} name={name} photo={photo} />
      </div>
    </>
  );
}

export default Messenger;
