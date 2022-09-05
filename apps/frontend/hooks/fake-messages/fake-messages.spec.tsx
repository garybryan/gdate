import { renderHook } from '@testing-library/react-hooks';

import { messageGroups } from '../../fixtures/fake-messages';

import { useFakeMessages } from './fake-messages';

describe('useFakeMessages', () => {
  it('sets fake messages', () => {
    renderHook(() => useFakeMessages(messageGroups));
  });
});
