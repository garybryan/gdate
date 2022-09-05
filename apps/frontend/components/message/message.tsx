import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageBubble from '../message-bubble/message-bubble';

import styles from './message.module.css';

interface MessageProps {
  children: MessageType['content'];
  isFromUser: MessageType['isFromUser'];
  name: Profile['name'];
  photo: Profile['photo'];
}

export function Message({ children, name, photo, isFromUser }: MessageProps) {
  return (
    <ListItem className={styles['listItem']}>
      <Avatar
        alt={name}
        src={`/profile-photos/${photo}`}
        className={styles[isFromUser ? 'fromUser' : 'fromCorrespondent']}
      />
      <ListItemText
        primary={
          <MessageBubble isFromUser={isFromUser}>{children}</MessageBubble>
        }
      />
    </ListItem>
  );
}

export default Message;
