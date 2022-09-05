import getMessages from '../../messages/get-messages/get-messages';

import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

import Messenger from '../../components/messenger/messenger';

interface MessagesProps {
  correspondent: Profile;
  messages: Message[];
}

export function Messages({
  messages,
  correspondent: { name, photo },
}: MessagesProps) {
  return <Messenger messages={messages} name={name} photo={photo} />;
}

export default Messages;

export async function getServerSideProps() {
  // const messages = await getMessages();
  const profile = {
    name: 'Dinesh',
    photo: 'dinesh.jpg',
  };
  const messages = [
    {
      isFromUser: true,
      content: 'Hi',
    },
    {
      isFromUser: false,
      content: "What's up",
    },
    {
      isFromUser: false,
      content: 'Second message',
    },
  ];
  return {
    props: { messages, correspondent: profile },
  };
}