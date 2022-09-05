import { renderHook } from '@testing-library/react-hooks';

import TEST_USER from '../../fixtures/test-user';
import { useUser } from '../user/user';
import { useFakeUser } from './fake-user';

jest.mock('../user/user');

const mockedUseUser = jest.mocked(useUser);

describe('useFakeUser', () => {
  it('sets fake user', () => {
    const mockSetUser = jest.fn();
    mockedUseUser.mockReturnValue({ user: null, setUser: mockSetUser });

    renderHook(useFakeUser);

    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledWith(TEST_USER);
  });
});
