import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import FormattedMessageContent from '../formatted-message-content/formatted-message-content';
import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageBubble from '../message-bubble/message-bubble';

import styles from './message.module.css';

interface MessageProps {
  children: MessageType['content'];
  isFromUser: MessageType['isFromUser'];
  name: Profile['name'];
  photo: Profile['photo'];
  ['aria-label']: string;
}

export function Message({ children, name, photo, isFromUser, 'aria-label': ariaLabel }: MessageProps) {
  const senderClass = isFromUser ? 'fromUser' : 'fromCorrespondent';
  return (
    <ListItem className={`${styles['listItem']} ${styles[senderClass]}`} aria-label={ariaLabel}>
      <Avatar alt={name} src={`/profile-photos/${photo}`} />
      <MessageBubble isFromUser={isFromUser}>
        <FormattedMessageContent>{children}</FormattedMessageContent>
      </MessageBubble>
    </ListItem>
  );
}

export default Message;
