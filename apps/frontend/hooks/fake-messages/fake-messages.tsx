import { useEffect, useRef, useState } from 'react';

import { Message } from '../../types/messages';

export function useFakeMessages(
  messageGroups: string[][],
  addMessage: (message: Message) => void,
  interval = 1500,
  typingInterval = 400
) {
  const [groupIndex, setGroupIndex] = useState(0);

  const [messageIndex, setMessageIndex] = useState(0);
  const messageIndexRef = useRef(messageIndex);

  const [isRunning, setIsRunning] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    messageIndexRef.current = messageIndex;
  }, [messageIndex]);

  const addContent = (content: string) => {
    addMessage({
      content,
      isFromUser: false,
    });
  };

  const triggerTyping = () =>
    setTimeout(() => setIsTyping(true), typingInterval);

  const addNext = () => {
    const indexRef = messageIndexRef.current;

    setIsTyping(false);
    addContent(messageGroups[groupIndex][indexRef]);

    if (indexRef < messageGroups[groupIndex].length - 1) {
      setMessageIndex((index) => index + 1);
      triggerTyping();
      setTimeout(addNext, interval);
    } else {
      setMessageIndex(0);
      setGroupIndex((index) => index + 1);
      setIsRunning(false);
      setIsTyping(false);
    }
  };

  const startNextGroup = () => {
    if (!isRunning) {
      setIsRunning(true);
      triggerTyping();
      if (groupIndex < messageGroups.length) {
        setTimeout(addNext, interval);
      }
    }
  };

  return { startNextGroup, isRunning, isTyping };
}
