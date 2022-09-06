import List from '@mui/material/List';

import { useUser } from '../../hooks/user/user';
import Message from '../message/message';
import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

import styles from './message-list.module.css';

interface MessageListProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
  messages: MessageType[];
  isCorrespondentTyping?: boolean;
}

export function MessageList({
  messages,
  correspondentName,
  correspondentPhoto,
  isCorrespondentTyping = false,
}: MessageListProps) {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const { name: userName, photo: userPhoto } = user;

  return (
    <List className={styles['list']}>
      {messages.map(({ isFromUser, content }) => (
        <Message
          name={isFromUser ? userName : correspondentName}
          photo={isFromUser ? userPhoto : correspondentPhoto}
          key={content}
          isFromUser={isFromUser}
        >
          {content}
        </Message>
      ))}
      {isCorrespondentTyping && (
        <Message
          name={correspondentName}
          photo={correspondentPhoto}
          key="typing"
          isFromUser={false}
          aria-label={`${correspondentName} is typing…`}
        >
          …
        </Message>
      )}
    </List>
  );
}

export default MessageList;
