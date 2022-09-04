import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

interface MessageProps {
  children: MessageType['content'];
  isFromUser: MessageType['isFromUser'];
  name: Profile['name'];
  photo: Profile['photo'];
}

export function Message({ children, name, photo, isFromUser }: MessageProps) {
  return (
    <ListItem>
      <ListItemAvatar sx={{order: isFromUser ? 1 : 0}}>
        <Avatar alt={name} src={`/profile-photos/${photo}`} />
      </ListItemAvatar>
      <ListItemText primary={children} />
    </ListItem>
  );
}

export default Message;
