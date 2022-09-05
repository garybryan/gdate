import { useState } from 'react';

import fakeMessages from '../../fixtures/fake-messages';

import Messenger from '../../components/messenger/messenger';

import { useFakeMessages } from '../../hooks/fake-messages/fake-messages';
import { useFakeUser } from '../../hooks/fake-user/fake-user';

import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';
import { useEffect } from 'react';

interface MessagesProps {
  correspondent: Profile;
  messages: Message[];
}

export function Messages({ correspondent: { name, photo } }: MessagesProps) {
  useFakeUser();

  const [messages, setMessages] = useState<Message[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  const addMessage = (message: Message) =>
    setMessages((messages) => [...messages, message]);

  const { startNextGroup } = useFakeMessages(
    fakeMessages.messageGroups,
    addMessage
  );

  useEffect(() => {
    if (!isStarted) {
      setIsStarted(true);
      startNextGroup();
    }
  }, [startNextGroup, isStarted, setIsStarted]);

  const onMessageSent = (content: string) => {
    addMessage({
      content,
      isFromUser: true,
    });
    startNextGroup();
  };

  return (
    <Messenger
      messages={messages}
      onMessageSent={onMessageSent}
      correspondentName={name}
      correspondentPhoto={photo}
    />
  );
}

export default Messages;

export async function getServerSideProps() {
  // TODO real profile
  const profile = {
    name: 'Dinesh',
    photo: 'dinesh.jpg',
    age: 28,
  };
  return {
    props: { correspondent: profile },
  };
}
