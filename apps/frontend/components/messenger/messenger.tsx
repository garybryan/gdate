import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import MessageList from '../message-list/message-list';

interface MessengerProps {
  name: Profile['name'];
  photo: Profile['photo'];
  messages: Message[];
}

export function Messenger({ messages, name, photo }: MessengerProps) {
  return (
    <>
      <h2>
        Conversation with <strong>{name}</strong>
      </h2>
      <MessageList messages={messages} name={name} photo={photo} />;
    </>
  );
}

export default Messenger;