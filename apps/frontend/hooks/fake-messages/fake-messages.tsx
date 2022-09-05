import { useEffect, useRef, useState } from 'react';

import { Message } from '../../types/messages';

export function useFakeMessages(
  messageGroups: string[][],
  addMessage: (message: Message) => void,
  interval = 1200
) {
  const [groupIndex, setGroupIndex] = useState(0);

  const [messageIndex, setMessageIndex] = useState(0);
  const messageIndexRef = useRef(messageIndex);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    messageIndexRef.current = messageIndex;
  }, [messageIndex]);

  const addContent = (content: string) => {
    addMessage({
      content,
      isFromUser: false,
    });
  };

  const addNext = () => {
    const indexRef = messageIndexRef.current;

    addContent(messageGroups[groupIndex][indexRef]);

    if (indexRef < messageGroups[groupIndex].length - 1) {
      setMessageIndex((index) => index + 1);
      setTimeout(addNext, interval);
    } else {
      setGroupIndex((index) => index + 1);
      setIsRunning(false);
    }
  };

  const startNextGroup = () => {
    if (!isRunning) {
      setIsRunning(true);
      if (groupIndex < messageGroups.length) {
        setTimeout(addNext, interval);
      }
    }
  };

  return { startNextGroup };
}
