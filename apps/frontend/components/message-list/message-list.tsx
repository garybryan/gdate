import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import styles from './message-list.module.css';

interface MessageListProps {
  correspondent: Profile;
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className={styles['container']}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {messages.map((message) => <p key={message.content}>{message.content}</p>)}
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}

export default MessageList;
