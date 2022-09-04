import List from '@mui/material/List';

import Message from '../message/message';
import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

import styles from './message-list.module.css';

interface MessageListProps {
  name: Profile['name'];
  photo: Profile['photo'];
  messages: MessageType[];
}

export function MessageList({ messages, name, photo }: MessageListProps) {
  return (
    <List className={styles['list']}>
      {messages.map((message) => (
        <Message name={name} photo={photo} key={message.content} isFromUser={message.isFromUser}>
          {message.content}
        </Message>
      ))}
    </List>
  );
}

export default MessageList;
