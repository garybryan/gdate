import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { Message as MessageType } from '../../types/messages';
import { Profile } from '../../types/profile';

interface MessageProps {
  children: MessageType['content'];
  name: Profile['name'];
  photo: Profile['photo'];
}

export function Message({ children, name, photo }: MessageProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={`/profile-photos/${photo}`} />
      </ListItemAvatar>
      <ListItemText primary={children} />
    </ListItem>
  );
}

export default Message;
