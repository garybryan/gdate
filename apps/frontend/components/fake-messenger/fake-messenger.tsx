import { useEffect, useState } from 'react';

import fakeMessages from '../../fixtures/fake-messages';

import Messenger from '../../components/messenger/messenger';

import { useFakeMessages } from '../../hooks/fake-messages/fake-messages';
import { useFakeUser } from '../../hooks/fake-user/fake-user';

import { Message } from '../../types/messages';
import { Profile } from '../../types/profile';

interface FakeMessengerProps {
  correspondentName: Profile['name'];
  correspondentPhoto: Profile['photo'];
}

export function FakeMessenger({
  correspondentName,
  correspondentPhoto,
}: FakeMessengerProps) {
  useFakeUser();

  const [messages, setMessages] = useState<Message[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  const addMessage = (message: Message) =>
    setMessages((messages) => [...messages, message]);

  const { startNextGroup, isTyping } = useFakeMessages(
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
    setTimeout(startNextGroup, 800);
  };

  return (
    <Messenger
      messages={messages}
      onMessageSent={onMessageSent}
      correspondentName={correspondentName}
      correspondentPhoto={correspondentPhoto}
      isCorrespondentTyping={isTyping}
    />
  );
}

export default FakeMessenger;
