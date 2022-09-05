import List from '@mui/material/List';

import Message from '../message/message';
import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

import styles from './message-list.module.css';

interface MessageListProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
  messages: MessageType[];
}

export function MessageList({
  messages,
  correspondentName,
  correspondentPhoto,
}: MessageListProps) {
  return (
    <List className={styles['list']}>
      {messages.map((message) => (
        <Message
          name={correspondentName}
          photo={correspondentPhoto}
          key={message.content}
          isFromUser={message.isFromUser}
        >
          {message.content}
        </Message>
      ))}
    </List>
  );
}

export default MessageList;
