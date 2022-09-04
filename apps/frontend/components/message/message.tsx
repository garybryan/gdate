import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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
    <ListItem>
      <ListItemAvatar
        className={`${styles['avatar']} ${
          styles[isFromUser ? 'fromUser' : 'fromCorrespondent']
        }`}
      >
        <Avatar alt={name} src={`/profile-photos/${photo}`} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <MessageBubble isFromUser={isFromUser}>{children}</MessageBubble>
        }
      />
    </ListItem>
  );
}

export default Message;
