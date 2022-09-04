import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Message from '../message/message';
import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

interface MessageListProps {
  name: Profile['name'];
  photo: Profile['photo'];
  messages: MessageType[];
}

export function MessageList({
  messages,
  name, photo
}: MessageListProps) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {messages.map((message) => (
        <Message name={name} photo={photo} key={message.content}>
          {message.content}
        </Message>
      ))}
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default MessageList;
