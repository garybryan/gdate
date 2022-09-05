import { useState } from 'react';

import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageField from '../message-field/message-field';
import MessageList from '../message-list/message-list';

import styles from './messenger.module.css';

interface MessengerProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
  messages: Message[];
}

export function Messenger({
  messages: initialMessages,
  correspondentName,
  correspondentPhoto,
}: MessengerProps) {
  const [messages, setMessages] = useState(initialMessages);

  const onSendMessage = async (content: string) => {
    setMessages([
      ...messages,
      {
        content,
        isFromUser: true,
      },
    ]);
  };

  return (
    <div className={styles['container']}>
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
      <MessageField onSendMessage={onSendMessage} />
    </div>
  );
}

export default Messenger;
