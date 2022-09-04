import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageList from '../message-list/message-list';

interface MessengerProps {
  correspondent: Profile;
  messages: Message[];
}

export function Messenger({ messages, correspondent }: MessengerProps) {
  return <MessageList messages={messages} correspondent={correspondent} />;
}

export default Messenger;
