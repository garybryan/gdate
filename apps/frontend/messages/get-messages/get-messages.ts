import { messageGroups } from '../../fixtures/fake-messages';
import { Message } from '../../types/messages';

export default async function getMessages(): Promise<Message[]> {
  return messageGroups[0].map((content: string) => ({ content, isFromUser: false }));
}
